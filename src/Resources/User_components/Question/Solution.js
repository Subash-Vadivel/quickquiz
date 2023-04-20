import {useState,useEffect} from 'react';
import axiosPrivate from '../../Api/axiosPrivate';
import solution_styles from '../../User_css/solution.module.css'

export const Solution = () => {

    const [solution,setSolution] = useState([])

    const load = async () => {
        await axiosPrivate.post('').then((res)=>{
            setSolution(res.data); 
            console.log(res)
        }).catch((err)=>{console.log(err)})
    }

    useEffect( ()=>{
        load()
    })

    return (
        <>Solution</>
    )

}