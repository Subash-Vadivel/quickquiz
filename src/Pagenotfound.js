import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import axiosPrivate from './Api/axiosPrivate';
import style from './pagenotfound.module.css';
export default function Pagenotfound() {

    useEffect(async()=>{
await axiosPrivate.get('/user/get-all-users').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    },[])
  return (
    <>
    <div class={style.error}>404</div>
<br /><br />
<span class={style.info}>File not found</span>
<img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class={style.static} />
</>
  )
}
