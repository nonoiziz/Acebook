import './style/main.scss';

// reference: https://community.wia.io/d/6-generating-an-svg-sprite-sheet-with-webpack
function importAllIcons(r) {
    r.keys().forEach(r);
}
importAllIcons(require.context('../public/icons/', true, /\.svg$/));

fetch('http://142.93.30.84/icons.svg').then(res => {
  return res.text();
}).then(data => {
  document.getElementById('svg-icons-container').innerHTML = data;
});

let isDarkMode = localStorage.getItem('theme') === 'dark' ? true : false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
  
    if (isDarkMode) {
      displayTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      displayTheme('light');
      localStorage.setItem('theme', 'light');
    }
}
function displayTheme(theme) {
    document.body.setAttribute('data-theme', theme);
}
function changePhase(target, phase) {
    target.setAttribute('data-phase', phase);
}
function bindClickEvent(selectorString, target, phase) {
    document.querySelector(selectorString).addEventListener('click', changePhase.bind(null, target, phase));
}
function numberToPrice(num, special) {
    let text = `\$${new Intl.NumberFormat('en-US').format(num)}`;

    if (special === true && num === 0) {
        text = '免費';
    }
    return text;
}
function setPriceText(root, priceText) {
    root.querySelector('.price').textContent = priceText;
}
function updateProductCount(root, diff) {
    let count = Number(root.getAttribute('data-count'));
    count = Math.max(0, count + diff);

    root.querySelector('.product-count').textContent = count;
    root.setAttribute('data-count', count);
}

const register = 'section.register-container';
const cart = 'section.cart-container';

function updateRegisterPrice() {
    const root = document.querySelector(register);
    const selectedElm = root.querySelector('input[name="shipping"]:checked');
    const total = Number(selectedElm.parentNode.getAttribute('data-price'));

    root.setAttribute('data-total-price', total);
}

function updateShippingPrice() {
    const source = document.querySelector(register);
    const target = document.querySelector(cart).querySelector('section.cart-info.shipping');
    const price = Number(source.getAttribute('data-total-price'));

    setPriceText(target, numberToPrice(price, true));
}

function updateCartPrice() {
    const root = document.querySelector(cart);
    const products = root.querySelectorAll('.product-container[data-price]');
    let total = 0;

    total = Array.from(products).reduce((prev, elm) => {
        const count = Number(elm.getAttribute('data-count'));
        const price = Number(elm.getAttribute('data-price'));

        return prev + price * count;
    }, total);

    root.setAttribute('data-total-price', total);
}

function updateTotalPrice() {
    const sources = [register, cart];
    const target = document.querySelector(cart).querySelector('section.cart-info.total');
    let total = 0;

    total = sources.reduce((prev, elm) => {
        const source = document.querySelector(elm);
        const price = Number(source.getAttribute('data-total-price'));

        return prev + price;
    }, total);

    setPriceText(target, numberToPrice(total, false));
}

function productActionHandle(root, diff) {
    updateProductCount(root, diff);
    updateCartPrice();
    updateTotalPrice();
}

function initializeRegister() {
    const root = document.querySelector(register);

    const shippingGroup = root.querySelectorAll('label.radio-group[data-price]');
    shippingGroup.forEach((elm) => {
        const price = Number(elm.getAttribute('data-price'));
        const priceText = numberToPrice(price, true);
        
        setPriceText(elm, priceText);

        elm.querySelector('input[name="shipping"]').addEventListener('change', () => {
            updateRegisterPrice();
            updateShippingPrice();
            updateTotalPrice();
        });
    });

    updateRegisterPrice();
    updateShippingPrice();
}

function initializeCart() {
    const root = document.querySelector(cart);

    const productGroup = root.querySelectorAll('.product-container[data-price]');
    productGroup.forEach((elm) => {
        const count = Number(elm.getAttribute('data-count'));
        const price = Number(elm.getAttribute('data-price'));
        const priceText = numberToPrice(price, true);
        
        updateProductCount(elm, count);
        setPriceText(elm, priceText);

        elm.querySelector('.product-action.minus').addEventListener('click', productActionHandle.bind(null, elm, -1));
        elm.querySelector('.product-action.plus').addEventListener('click', productActionHandle.bind(null, elm, +1));
    });

    updateCartPrice();
    updateTotalPrice();
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('#theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);

    if (isDarkMode) {
        displayTheme('dark');
    } else {
        displayTheme('light');
    }


    const phaseMap = {
        'address': {
            'next': 2
        },
        'shipping': {
            'prev': 1,
            'next': 3
        },
        'credit-card': {
            'prev': 2,
            'next': 3
        }
    };

    const phaseAnchor = document.querySelector('section.register-container');
    for (let phase in phaseMap) {
        const phaseObject = phaseMap[phase];
        for (let action in phaseObject) {
            bindClickEvent(`section.button-group[data-phase="${phase}"] > .${action}`, phaseAnchor, phaseObject[action]);
        }
    }

    initializeRegister();
    initializeCart();
});