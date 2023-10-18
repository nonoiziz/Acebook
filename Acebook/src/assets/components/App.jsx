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
  const [inputText, setInputText] = useState('');
  const [message, setMessage ] = useState([
    {id: 16976, text: 'hi' }, 
    {id: 169761, text: 'yoyo' }, 
    {id: 169762, text: 'gogo' }
  ]) 
  
  const handlePostSubmit = (newText) => {
    const id = Date.now()
    const newPost = {id, text: newText}
    setMessage([newPost, ...message]);
    setInputText('')
  }

  return(
    <Fragment>
      <MyDataProvider>
      <Header />
      <PostArea 
        inputText={inputText}
        setInputText={setInputText}
        handlePostSubmit={handlePostSubmit}
        />
      <MyVideoProvider>
      <Reels />
      </MyVideoProvider>
      <Poster message={message}/>
      <Footer />
      </MyDataProvider>
    </Fragment>
  )
}

export default App
