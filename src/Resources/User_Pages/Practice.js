import React,{useState,useEffect} from 'react'
import { useAuth } from '../../Authentication'
import practice_styles from '../User_css/practice.module.css'
import { useNavigate } from 'react-router-dom';

import { Card, Row, Col, Container, Form, Button} from 'react-bootstrap';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
import axiosPrivate from '../../Api/axiosPrivate';



export default function Practice() {
    
const navigate = useNavigate()

const auth=useAuth();
const [start,setStart]=useState(0);

const [practice,setPractice] = useState([])

const [filter,setFilter] = useState([])

const [category,setCategory] = useState([])

const [checked,setChecked] = useState({'Easy': false,'Medium': false, 'Hard': false})

const [currentFilter,setCurrentFilter] = useState({mode:[],categoryName:[]})

const [state,setState] = useState(0)

const load=async()=>{
        await axiosPrivate.get('/question/practice').then((res)=>{
            setPractice(res.data.data.allQuestions); 
            setFilter(res.data.data.allQuestions);
            var questionList = res.data.data.allQuestions
            var checkedList = checked
            var categoryList = []
            questionList.map((data) => {
                if(categoryList.includes(data.categoryName) === false){
                    categoryList.push(data.categoryName)
                    checkedList[data.categoryName] = false
                }
            })
            setCategory(categoryList)
            setChecked({...checkedList})
        }).catch((err)=>{console.log(err)})
        
    //   setPractice([{"title":"Advanced Python Programming","body":""},{"title":"Java Object Oriented Programming","body":""},
    // {"title":"Introduction to Modern C++","body":""},{"title":"C Language","body":""}])
    // axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{ setLearn(res.data)})
}


const isChecked = (e) => {
    var checkedList = checked
    checkedList[e.target.id] = !checkedList[e.target.id]
    setChecked({...checkedList})
}

const updateFilter = () => {
    var changeFilter = []
    if(currentFilter.categoryName.length === 0 && currentFilter.mode.length !== 0 ){
        practice.map((data,index)=>{
            if(currentFilter.mode.includes(data.mode) === true){
                changeFilter.push(data)
            }
        })
    }
    else if(currentFilter.mode.length === 0 && currentFilter.categoryName.length !== 0){
        practice.map((data,index)=>{
            if(currentFilter.categoryName.includes(data.categoryName) === true){
                changeFilter.push(data)
            }
        })
    }
    else if(currentFilter.mode.length !== 0 && currentFilter.categoryName.length !== 0){
        practice.map((data,index)=>{
            if(currentFilter.mode.includes(data.mode) === true && currentFilter.categoryName.includes(data.categoryName) === true ){
                changeFilter.push(data)
            }
        })
    }
    setFilter(changeFilter)
    setState(0);
}

const clearFilter = () => {
    var checkedList = checked
    Object.keys(checkedList).map(data=>{
        if(checkedList[data] === true){
            checkedList[data] = false
        }
    })
    setCurrentFilter({mode: [], categoryName: []})
    setChecked(checkedList)
    setFilter([...practice])
}

const applyFilter = () => {
    var checkedList = checked
    var currFilters = {mode: [], categoryName: []}
    Object.keys(checkedList).map(data=>{
        if(checkedList[data] === true){
            if(['Easy','Medium','Hard'].includes(data) === true){
                if(currFilters.mode.length === 0){
                    currFilters.mode.push(data)
                }
                else if(currFilters.mode.includes(data)===false){
                    currFilters.mode.push(data)
                }
            }
            else{
                if(currFilters.categoryName.length === 0){
                    currFilters.categoryName.push(data)
                }
                else if(currFilters.categoryName.includes(data)===false){
                    currFilters.categoryName.push(data)
                }
            }
            
        }
    })
    setCurrentFilter(currFilters)
    setState(1)

}

useEffect(()=>{
    load();
    
},[])
useEffect(()=>{
    updateFilter()
},[state])


return (
    <>
    {/* <Card className={practice_styles.headcontainer}>
          <Card.Body className={practice_styles.cardbody}>
            <Card.Title className={practice_styles.title}>Practice</Card.Title>
          </Card.Body>
    </Card> */}  
    
    
    <div className={practice_styles.hr}><span><b>Practice</b></span></div>
    <br></br> 
    <div className={practice_styles.dFlex}>
    <div className={practice_styles.fixedSideBar}>
    

    <CDBSidebar className={practice_styles.filterbox}>
                <CDBSidebarHeader className={practice_styles.filterbox_header} prefix={<i className="fa fa-filter fa-small"></i>}>
                <p className={practice_styles.filterbox_title} >
                    Filter
                </p>
                </CDBSidebarHeader>
                <CDBSidebarContent className={practice_styles.filterbox_content}>
                    <CDBSidebarMenu className={practice_styles.filterbox_menu}>
                        <CDBSidebarMenuItem className={practice_styles.filterbox_alter}>
                            <Row>
                            <Col><Button variant='danger' onClick={clearFilter}>Clear</Button></Col>
                            <Col><Button variant='success'onClick={applyFilter}>Apply</Button></Col>
                            </Row>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                           Difficulty
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`Easy`}
                                checked={checked['Easy']}
                                onChange={isChecked}
                                label={`Easy`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`Medium`}
                                checked={checked['Medium']}
                                onChange={isChecked}
                                label={`Medium`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem><Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`Hard`}
                                checked={checked['Hard']}
                                onChange={isChecked}
                                label={`Hard`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        <CDBSidebarMenuItem>
                            Category
                        </CDBSidebarMenuItem>
                        {category.map((data,index) =>
                        <CDBSidebarMenuItem key={index}>
                        <Form>
                            <Form.Check 
                                type={"Checkbox"}
                                id={`${data}`}
                                checked={checked[`${data}`]}
                                onChange={isChecked}
                                label={`${data}`}
                            /></Form>
                        </CDBSidebarMenuItem>
                        )}
                    </CDBSidebarMenu>
                </CDBSidebarContent>
                
            </CDBSidebar>

        </div>
    <div className={practice_styles.outlet}>



    <Container fluid className={practice_styles.maincontainer}>
        <Row className={practice_styles.practicelist}>
        
            { filter.slice(start,start+5).map((data,index)=> 
            <Col key={index}>
                {console.log(data)}
                <Card className={practice_styles.questionpaper} >
                    <Card.Title>
                        <Row><Col sm={9}>Topic : {data.topic}</Col><Col>Time : {data.time} Min</Col></Row></Card.Title>
                    <Card.Body>
                    <Row>
                    <Col sm={6}><Card.Text>Category :  {data.categoryName}</Card.Text></Col>
                    <Col sm={6}><Card.Text>Difficulty Level :  {data.mode}</Card.Text></Col>
                    </Row>
                    <Row>
                    <Col sm={6}><Card.Text>Total Questions : {data.questions.length}</Card.Text></Col>
                    <Col sm={6}><Card.Text></Card.Text></Col>
                    </Row>
                    <Row>
                    <Col sm = {10}></Col>
                    <Col><Button onClick={()=>navigate(`/taketest/${data._id}`)} variant='success'>Practice</Button></Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
        
               )}
               
               <Row>
                <Col>
               {start>2?<Button style={{float:"right"}} onClick={()=>{setStart((pre)=>pre-5)}}>Back</Button>:<></>}
               </Col>
               <Col>
               {start+5<filter.length-1?<Button onClick={()=>{setStart((pre)=>pre+5)}}>Next</Button>:<></>}
               </Col>
               </Row>
        </Row>
    </Container>


        </div>
    </div>    

    </>
)
}