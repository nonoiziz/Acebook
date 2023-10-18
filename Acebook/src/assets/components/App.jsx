import Header from './Header'
import PostArea from './PostArea'
import '../style/App.css'
import Reels from './Reels'
import Poster from './Poster'
import Footer from './Footer'
import { Fragment } from 'react'
import { MyDataProvider } from '../context/UserData'
import { MyVideoProvider } from '../context/VideoData'
import { useState } from 'react'


function App() {
  const [message, setMessage ] = useState([{id: 16976, text: 'hi' }, {id: 169761, text: 'yoyo' }, {id: 169762, text: 'gogo' }]) 
  
  return(
    <Fragment>
      <MyDataProvider>
      <Header />
      <PostArea add={setMessage}/>
      <MyVideoProvider>
      <Reels />
      </MyVideoProvider>
      <Poster listMessage={message}/>
      <Footer />
      </MyDataProvider>
    </Fragment>
  )
}

export default App
