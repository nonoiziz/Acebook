import '../style/Poster.css'
import { useMyData } from '../context/UserData';

function Poster() {
   const myData = useMyData();
   if (myData && myData.results && myData.results.length > 0) {
  return (
    <div className="poster-container">
      <div className="poster-wrapper">
        <div className="poster-header">
          <div className="poster-picture">
            <img src={myData.results[9].picture.thumbnail} alt='User' className="card-image" />
            </div>
          <div className="poster-infoCard">
            <div className="poster-title">報廢公社</div>
            <div className="poster-info">{myData.results[2].location.city}</div>
          </div>
          <div className="menu-tag">
            <div className="menu">...</div>
            <div className="delete">X</div>
          </div>
        </div>
        <div className="poster-context">
          <div className="poster-text">111</div>
          <div className="poster-photo">22</div>
        </div>
        <div className="poster-state">
          <div className="emoji"></div>
          <div className="message-length"></div>
        </div>
        <div className="feedback-container">
          <div className="emoji-selector">讚</div>
          <div className="leave-message">留言</div>
          <div className="share">分享</div>
        </div>
      </div>
    </div>
  )
}
}
export default Poster