import Header from './Header'
import PostArea from './PostArea'
import '../style/App.css'
import Reels from './Reels'
import Poster from './Poster'
import Footer from './Footer'
import { Fragment } from 'react'

function App() {
  return(
    <Fragment>
      <Header />
      <PostArea />
      <Reels />
      <Poster />
      <Footer />
    </Fragment>
  )
}

export default App
