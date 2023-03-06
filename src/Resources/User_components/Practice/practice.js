import React,{useState,useEffect} from 'react'
import learn_styles from '../Learn/learn.module.css'
import axios from 'axios'

export default function Learn() {

  const [practice,setPractice] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{ setPractice(res.data)})
  },[practice])

  
  return (

    <div>
        <div className={learn_styles.headcontainer}>
          Practice
        </div> 
        <div className={learn_styles.subcontainer}>
            {practice.map(l=> 
            <div className={learn_styles.flip_card}>
              <div className={learn_styles.flip_card_inner}>
                <div className={learn_styles.flip_card_front}>
                  <h2 className={learn_styles.flip_card_content}>{l.title}</h2>
                </div>
                <div className={learn_styles.flip_card_back}>
                  <p className={learn_styles.flip_card_content}>{l.body}</p>
                  <a href='/'>Readmore..</a>
                </div>
              </div>
            </div> ) }
        </div>
      </div>
  )
}
