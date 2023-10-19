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
    {id: 16976, text: 'hi' ,avatar: 'https://randomuser.me/api/portraits/thumb/women/64.jpg' ,city: 'USA'}, 
    {id: 169761, text: 'yoyo', avatar: 'https://randomuser.me/api/portraits/thumb/men/61.jpg', city: 'Japan' }, 
    {id: 169762, text: 'gogo', avatar: 'https://randomuser.me/api/portraits/thumb/men/59.jpg' , city: 'Korea'}
  ]) 
  
 
  
  const handlePostSubmit = (newText) => {
    const id = Date.now()
    const newPost = {id, text: newText, avatar: 'https://randomuser.me/api/portraits/thumb/women/99.jpg', city: 'Taipei'}
    setMessage([newPost, ...message]);
    setInputText('')
  }

  const handleMessageDelete = (id) => {
    console.log(id)
  }

  return(
    <Fragment>
      <MyDataProvider>
      <Header />
      <PostArea 
        inputText={inputText}
        setInputText={setInputText}
        AddNewPost={handlePostSubmit}
        />
      <MyVideoProvider>
      <Reels />
      </MyVideoProvider>
      <Poster message={message} onClick={handleMessageDelete}/>
      <Footer />
      </MyDataProvider>
    </Fragment>
  )
}

export default App
