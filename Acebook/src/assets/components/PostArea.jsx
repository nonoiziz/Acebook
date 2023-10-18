import '../style/PostArea.css'
import { useMyData } from '../context/UserData';

export default function PostArea() {
  const myData = useMyData();
   if (myData && myData.results && myData.results.length > 0) {
  return (
    <div className="postArea-container">
      <div className="postArea-wrapper">
        <div className="userProfile-container">
          <img src={myData.results[0].picture.thumbnail} alt='User' className="card-image" />
        </div>
        <div className="poster-container">
          <div className="poster-area">
            <input className="poster-area-input" type='text' placeholder='在想些什麼'></input>
          </div>
        </div>
        <div className="photoPoster-container">
          <div className="photo-poster"><i class="fa-regular fa-image"></i></div>
        </div>
      </div>
    </div>
  )
}
}