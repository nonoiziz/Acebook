import '../style/Poster.css'
import { useMyData } from '../context/UserData';
import { getRandomInt} from '../context/Function'

function Poster({message, handleMessageDelete}) {
   const myData = useMyData();
   if (myData && myData.results && myData.results.length > 0) {
  return (
    <div className="poster-container">
      {message.map(message => 
      <div className="poster-wrapper" key={message.id}>
        <div className="poster-header">
          <div className="poster-picture">
            <img src={message.avatar} alt='User' className="card-image1" />
            </div>
          <div className="poster-infoCard">
            <div className="poster-title">報廢公社</div>
            <div className="poster-info">{message.city}</div>
          </div>
          <div className="menu-tag">
            <div className="menu"><i className="fa-solid fa-list"></i></div>
            <div className="delete" onClick={() =>handleMessageDelete(message.id)}><i className="fa-solid fa-x"></i></div>
          </div>
        </div>
        <div className="poster-context">
          <div className="poster-text">{message.text}</div>
          <div className="poster-photo">22</div>
        </div>
        <div className="poster-state">
          <div className="emoji"></div>
          <div className="message-length"></div>
        </div>
        <div className="feedback-container">
          <div className="emoji-selector"><i className="fa-regular fa-heart">讚</i></div>
          <div className="leave-message"><i className="fa-regular fa-comment">留言</i></div>
          <div className="share"><i className="fa-regular fa-share-from-square">分享</i></div>
        </div>
      </div>)}
    </div>
  )
}
}
export default Poster