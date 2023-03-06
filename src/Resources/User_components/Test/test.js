import React,{useState,useEffect} from 'react'
import learn_styless from '../Learn/learn.module.css'
import axios from 'axios'

export default function Learn() {

  const [test,setTest] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{ setTest(res.data)})
  },[test])

  
  return (

    <div>
        <div className={learn_styless.headcontainer}>
          Test
        </div> 
        <div className={learn_styless.subcontainer}>
            {test.map(l=> 
            <div className={learn_styless.flip_card}>
              <div className={learn_styless.flip_card_inner}>
                <div className={learn_styless.flip_card_front}>
                  <h2 className={learn_styless.flip_card_content}>{l.title}</h2>
                </div>
                <div className={learn_styless.flip_card_back}>
                  <p className={learn_styless.flip_card_content}>{l.body}</p>
                  <a href='/'>Readmore..</a>
                </div>
              </div>
            </div> ) }
        </div>
      </div>
  )
}
