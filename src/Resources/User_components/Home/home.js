import React,{useState} from 'react'
import Learn from '../Learn/learn'
import Practice from '../Practice/practice'
import Test from '../Test/test'
import NavBar from '../Navbar/Navbar'
import home_styles from './home.module.css'

function Home() {

  const [display,setDisplay] = useState("learn")

  return (
    <div>
      <NavBar/>
      <div className={home_styles.container}> 
    { display==="learn" ? <Learn/> : display==="practice" ? <Practice/> : <Test/> }
      </div>
    </div>
  )
}

export default Home
