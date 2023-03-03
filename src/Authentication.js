import React, { useContext, useEffect, useState } from 'react'
export const userStatus=React.createContext();
export default function Authentication(props) {
    const [user,setUser]=useState(null);
    const login=(name)=>{
        setUser(name);
        console.log(name);
        localStorage.setItem('jwt',name);
    }
    const logout=()=>{
        setUser(null);
        localStorage.removeItem('jwt')
    }
  useEffect(()=>{
    if(localStorage.getItem('jwt')!==undefined)
    {
      setUser(localStorage.getItem('jwt'));
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