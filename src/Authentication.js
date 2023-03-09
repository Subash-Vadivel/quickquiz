import axios from './Api/axiosPrivate'
import React, { useContext,  useState } from 'react'
export const userStatus=React.createContext();
export default function Authentication(props) {
    const [user,setUser]=useState(localStorage.getItem('user'));
    const[details,setDetails]=useState(localStorage.getItem('details'))
    const login=(data)=>{
      localStorage.setItem('user',data.firstName);
      localStorage.setItem('details',JSON.stringify(data));
      setDetails(JSON.stringify(data))
        setUser(data.firstName);
        console.log(data.firstName);
    }
    const logout=async()=>{

       
      await axios.post('/accounts/logout').then(()=>{

        setUser(false);
        localStorage.removeItem('user')
        // await axios.post('/logout');
        localStorage.removeItem('details')
      }).catch((err)=>{
        console.log(err);
      })

    }
  return (
    <>  
          <userStatus.Provider value={{user,login,logout,details}}>
            {props.children}
          </userStatus.Provider>
    
    </>
  )
}
export const useAuth=()=>{return useContext(userStatus)};