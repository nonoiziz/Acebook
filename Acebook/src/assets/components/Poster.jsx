import '../style/Poster.css'

function Poster() {
  return (
    <div className="poster-container">
      <div className="poster-wrapper">
        <div className="poster-header">
          <div className="poster-photo"></div>
          <div className="poster-infoCard">
            <div className="poster-title"></div>
            <div className="poster-info"></div>
          </div>
          <div className="menu">...</div>
          <div className="delete">X</div>
        </div>
        <div className="poster-context">
          <div className="poster-text"></div>
          <div className="poster-photo"></div>
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

export default Poster