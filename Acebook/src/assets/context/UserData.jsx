import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const MyDataContext = createContext();


export function MyDataProvider({ children }) {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=100')
      .then(response => {
        setMyData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <MyDataContext.Provider value={myData}>
      {children}
    </MyDataContext.Provider>
  );
}

export function useMyData() {
  return useContext(MyDataContext);
}
