import Header from './Header'
import PostArea from './PostArea'
import '../style/App.css'
import Reels from './Reels'
import Poster from './Poster'
import Footer from './Footer'
import { Fragment } from 'react'
import { MyDataProvider } from '../context/UserData'
import { MyVideoProvider } from '../context/VideoData'

function App() {
  return(
    <Fragment>
      <MyDataProvider>
      <Header />
      <PostArea />
      <MyVideoProvider>
      <Reels />
      </MyVideoProvider>
      <Poster />
      <Footer />
      </MyDataProvider>
    </Fragment>
  )
}

export default App
