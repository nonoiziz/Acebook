import '../style/PostArea.css'

export default function PostArea() {
  return (
    <div className="postArea-container">
      <div className="postArea-wrapper">
        <div className="userProfile-container"></div>
        <div className="poster-container">
          <div className="poster-area" type='text'></div>
        </div>
        <div className="photoPoster-container">
          <div className="photo-poster">照片按鈕</div>
        </div>
      </div>
    </div>
  )
}