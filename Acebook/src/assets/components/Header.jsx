import '../style/Header.css'

export default function Header() {
  return (
  <div className="header-container">
    <div className="header-wrapper">
      <div className="acebook-logo"><h2>Acebook</h2></div>
      <div className="items-container">
        <div className="publish-button-container aa">
          <button className="publish-but btn"><i className="fa-solid fa-plus"></i></button>
          <div className="circle-contain"></div>
        </div>

        <div className="search-button-container aa">
          <button className="search-but btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          <div className="circle-contain"></div>
        </div>

        <div className="message-button-container aa"> 
          <button className="message-but btn"><i className="fa-solid fa-user"></i></button>
          <div className="circle-contain"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

