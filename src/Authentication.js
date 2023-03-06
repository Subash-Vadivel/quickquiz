import axios from './Api/axiosPrivate'
import React, { useContext,  useState } from 'react'
export const userStatus=React.createContext();
export default function Authentication(props) {
<<<<<<< HEAD
    const [user,setUser] = useState(null);
    const login=(name)=>{
        setUser(name);
=======
    const [user,setUser]=useState(localStorage.getItem('user'));
    const login=(data)=>{
      
      localStorage.setItem('user',data.firstName);
      localStorage.setItem('details',JSON.stringify(data));
        setUser(data.firstName);
        console.log(data.firstName);
>>>>>>> 05d3c38950393639b760af57ff7cd28840923e3e
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
          <userStatus.Provider value={{user,login,logout}}>
            {props.children}
          </userStatus.Provider>
    
    </>
  )
}
export const useAuth=()=>{return useContext(userStatus)};