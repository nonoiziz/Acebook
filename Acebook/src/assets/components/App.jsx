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
  const [messages, setMessages ] = useState([
    {id: 16976, text: '好吃的台北餐廳超級多，從老牌的古早味到最新潮的飲食體驗通通有！就讓身為台北人的小編替大家省去搜尋的煩惱，整理出【台北美食精選】，推薦27家必吃台北美食小吃、 ...' ,avatar: 'https://randomuser.me/api/portraits/thumb/women/64.jpg' ,city: 'USA'}, 
    {id: 169761, text: '台北美食推薦2023！破百間牛排火鍋午茶IG早午餐日式料理港點夜市小吃等美食挖掘， 地區/捷運站分類一目瞭然，累積多年推薦餐廳千呼萬喚使出來，隨時更新還附美食優惠 ...', avatar: 'https://randomuser.me/api/portraits/thumb/men/61.jpg', city: 'Japan' }, 
    {id: 169762, text: '2022年2月16日 — 在地台北人推薦，精選219間日式料理、港點、夜市小吃、火鍋、下午茶、早午餐、牛排、義式料理、吃到飽、小酒館等，Sky按照地區分類，讓你輕鬆查詢！', avatar: 'https://randomuser.me/api/portraits/thumb/men/59.jpg' , city: 'Korea'}
  ]) 
  
  const handlePostSubmit = (newText) => {
    const id = Date.now()
    const newPost = {id, text: newText, avatar: 'https://randomuser.me/api/portraits/thumb/women/99.jpg', city: 'Taipei'}
    setMessages([newPost, ...messages]);
    setInputText('')
  }

  const handleMessageDelete = (id) => {
    const deleteText = messages.filter((messages) => id !== messages.id);
    setMessages(deleteText)
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
      <Poster 
      message={messages} 
      handleMessageDelete={handleMessageDelete}/>
      <Footer />
      </MyDataProvider>
    </Fragment>
  )
}

export default App
