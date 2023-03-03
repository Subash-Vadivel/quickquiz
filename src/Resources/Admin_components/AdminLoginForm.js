import React,{useState,useRef,useEffect} from 'react'
import styleloginform from '../Admin_css/adminloginform.module.css'
import { useAuth } from '../../Authentication';
import axios from 'axios';
export default function AdminLoginForm(props) {
  const inputRef=useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[]);
  const auth=useAuth();
  const [userid,setUserID]=useState('');
  const [password,setPassword]=useState('');
  const [cursorStyle, setCursorStyle] = useState('default');
  const handleMouseOver=()=>
  {
    setCursorStyle('default');
  }
  const handleMouseOut=()=>
  {
    setCursorStyle('default');
  }
  const submitform=async(e)=>{
e.preventDefault();
     const t=await axios.post('https://quick-quiz.onrender.com/accounts/login',{user:userid,
     password:password}).then((res)=>{auth.login(res.data.data.jwt_token);props.setStatus("success")}).catch((err)=>{console.log("catch : "+err)});
    //  auth.login(res.data.jwt_token);props.setStatus("success")
  }
  return (
<div className={`Auth-form-container ${styleloginform.formWrapper}`}>
      <form className="Auth-form">
        <div className="Auth-form-content ">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            value={userid}
            ref={inputRef}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>{setUserID(e.target.value)}}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={submitform} className="btn btn-primary">
              Submit
            </button>
          </div><br/>
          <span className="forgot-password text-right mt-2" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{cursor:cursorStyle}}onClick={()=>{
            props.setStatus("forgot")
          }}>
            Forgot password ?</span>
        </div>
      </form>
    </div>

  )
}
