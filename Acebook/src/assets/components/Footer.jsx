import '../style/Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="index-button-container">
          <div className="index-button-image"></div>
          <div className="index-button-text">首頁</div>
        </div>
        <div className="friends-button-container">
          <div className="friends-button-image"></div>
          <div className="friends-button-text">朋友</div>
        </div>
        <div className="notice-button-container">
          <div className="notice-button-image"></div>
          <div className="notice-text">通知</div>
        </div>
        <div className="footer-menu-container">
          <div className="footer-menu-image"></div>
          <div className="footer-menu-text">功能表</div>
        </div>
      </div>
    </div> 
  )
}

export default Footer