import '../style/Reels.css'
import ReelsCards from './ReelsCards'
import { useVideo } from '../context/VideoData'


function Reels() {
  const videos = useVideo();
  return (
    <div className="reels-container">
      <div className="card-container">
        <div className="cards">
          <div className="card">
            
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />
           <ReelsCards />


          </div>
        </div>
      </div>
    </div>
  )
}

export default Reels