import React, { useContext, useEffect, useState } from 'react'
export const userStatus=React.createContext();
export default function Authentication(props) {
    const [user,setUser]=useState(null);
    const login=(data)=>{
        setUser(data);
        console.log(data);
        localStorage.setItem('user',data);
    }
    const logout=()=>{
        setUser(null);
        localStorage.removeItem('user')
    }
  useEffect(()=>{
    if(localStorage.getItem('user')!==undefined)
    {
      setUser(localStorage.getItem('user'));
    }
  },[])
  return (
    <>  
          <userStatus.Provider value={{user,login,logout}}>
            {props.children}
          </userStatus.Provider>
    
    </>
  )
}
export const useAuth=()=>{return useContext(userStatus)};