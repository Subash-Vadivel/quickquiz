import React,{useState} from 'react'
import { Button } from 'react-bootstrap';
import style from './sb.module.css';
export default function Options(props) {
    const [start,setStart]=useState((props.start*3))
  return (
    <>
    {
      props.qnum.slice(start,start+3).map((res,index)=>
      <td key={index} style={{textAlign:"center"}}><Button 
      variant=
       { (props.answerscript[props.question[res-1].question]===undefined || props.answerscript[props.question[res-1].question]==="" )?
                 "warning":"success"
        }       
       className={style.sb} onClick={()=>{props.setCurrentQ(res)}}><span>{res}</span></Button></td>

      )

    }
    </>
  )
}