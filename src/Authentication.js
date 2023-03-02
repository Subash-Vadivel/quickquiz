import React, { useContext, useState } from 'react'
export const userStatus=React.createContext();
export default function Authentication(props) {
    const [user,setUser]=useState(null);
    const login=(name)=>{
        setUser(name);
    }
    const logout=()=>{
        setUser("");
    }
  return (
    <>
          <userStatus.Provider>
            {props.children}
          </userStatus.Provider>
    
    </>
  )
}

export const useAuth=()=>useContext(userStatus);