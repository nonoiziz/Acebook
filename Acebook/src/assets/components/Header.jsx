import '../style/Header.css'

export default function Header() {
  return (
  <div className="header-container">
    <div className="header-wrapper">
      <div className="acebook-logo">Acebook</div>
      <div className="items-container">
        <div className="publish-buttom">+</div>
        <div className="search-buttom">O</div>
        <div className="message-buttom">M</div>
      </div>
    </div>
  </div>
  )
}