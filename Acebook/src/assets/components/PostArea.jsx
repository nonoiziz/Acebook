import '../style/PostArea.css'
import { useMyData } from '../context/UserData';



export default function PostArea({ setInputText, inputText, AddNewPost}) {
  const myData = useMyData();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputText.length > 0) {
      AddNewPost(inputText);
    }
  };


   if (myData && myData.results && myData.results.length > 0) {
  return (
    <div className="postArea-container">
      <div className="postArea-wrapper">
        <div className="userProfile-container">
          <img src={'https://randomuser.me/api/portraits/thumb/women/99.jpg'} alt='User' className="card-image" />
        </div>
        <div className="poster-container">
          <div className="poster-area">
            <input 
              className="poster-area-input" 
              type='text' 
              placeholder='在想些什麼'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}></input>
          </div>
        </div>
        <div className="photoPoster-container">
          <div className="photo-poster"><i className="fa-regular fa-image"></i></div>
        </div>
      </div>
    </div>
  )
}
}