import React from 'react'
import axios from 'axios'
axios.defaults.withCredentials=true;

export default function Test() {
  
  const submit=async(e)=>{
      e.preventDefault();
      const res=await axios.get("https://quick-quiz.onrender.com/user/get-all-users",{withCredentials:true}).catch((err)=>{console.log(err)})
      const d=await res.data;
      console.log(d);
  }
    return (
    <>
       <button onClick={submit}>Click</button>
    </>
  )
}
