import React from 'react'
import { Container } from 'react-bootstrap';
import style from './pagenotfound.module.css';
export default function Pagenotfound() {
  return (
    <>
    <div class={style.error}>404</div>
<br /><br />
<span class={style.info}>File not found</span>
<img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class={style.static} />
</>
  )
}
