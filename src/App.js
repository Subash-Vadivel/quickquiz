import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Authentication';

import Admin from './Resources/Admin_Pages/Admin'
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLogin from './Resources/Admin_Pages/AdminLogin';
import Home from './Resources/User_Pages/Home';
import AdminPanel from './Resources/Admin_Pages/AdminPanel';
import AdminLoginRequired from './Resources/Admin_Pages/AdminLoginRequired';
import Base from './Resources/User_Pages/Base';
import UserLoginRequired from './Resources/User_components/UserLoginRequired';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './Resources/User_Pages/Login';
import DashBoard from './Resources/Admin_Pages/DashBoard';
import QuestionSet from './Resources/Admin_Pages/QuestionSet';
import Practice from './Resources/User_Pages/Practice';
import Test from './Resources/User_Pages/Test';
function App() {
  return (
    <>
       <Authentication>
        <Routes>
             
            <Route path='/' element={<UserLoginRequired><Base/></UserLoginRequired>}>
              <Route index element={<Home/>}/>
              <Route path='practice' element={<Practice/>}></Route>
              <Route path='test' element={<Test/>}></Route>


            
            </Route>
            <Route path='login' element={<Login/>}/>

          
           <Route path='/admin' element={<AdminLoginRequired><Admin/></AdminLoginRequired>}>
                    <Route index element={<DashBoard/>}></Route>
                    <Route path="setquestion" element={<QuestionSet/>}></Route>

           </Route>
           
           <Route path='admin/login' element={<AdminLogin/>}/>
        </Routes>
       </Authentication>



    </>
  );
}
export default App;
