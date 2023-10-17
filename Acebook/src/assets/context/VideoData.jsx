import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const MyVideoContext = createContext();


export function MyVideoProvider({ children }) {
  const [myVideo, setVideo] = useState([]);

  useEffect(() => {
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=WaEXo3uEQQ33EKRrxwDRVVtmfjyliy3S&tag=&rating=g')
      .then(response => {
        setVideo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <MyVideoContext.Provider value={myVideo}>
      {children}
    </MyVideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(MyVideoContext);
}
