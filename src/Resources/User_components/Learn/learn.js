import React,{useState,useEffect} from 'react'
import learn_styless from './learn.module.css'
import NavBar from '../Navbar/Navbar'
import axios from 'axios'

export default function Learn() {

  const [learn,setLearn] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{ setLearn(res.data)})
  },[learn])

  
  return (

    <div>
      <div className={learn_styless.headcontainer}>
          Courses
        </div> 
        <div className={learn_styless.subcontainer}>
          {learn.map(l=>
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
          </div> 
          )}
        </div>
        </div>
      
  )
}
