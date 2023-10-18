import '../style/ReelsCards.css'
import { useVideo } from '../context/VideoData';

function ReelsCards() {
  const myVideo = useVideo()

  if (!myVideo.data || !myVideo.data.images || !myVideo.data.images.fixed_width_small.url) {
 
    return null;
  }
 
  return (

  <div className='card'>
      <img src={myVideo.data.images.fixed_width_small.url} alt="" className="gif" />
  </div>
)
  
}

export default ReelsCards