import '../style/Footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="index-buttom-container">
          <div className="index-buttom-image"></div>
          <div className="index-buttom-text">首頁</div>
        </div>
        <div className="friends-buttom-container">
          <div className="friends-buttom-image"></div>
          <div className="friends-buttom-text">朋友</div>
        </div>
        <div className="notic-buttom-container">
          <div className="notic-buttom-image"></div>
          <div className="notic-text">通知</div>
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