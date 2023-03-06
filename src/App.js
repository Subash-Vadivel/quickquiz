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
function App() {
  return (
    <>
       <Authentication>
        <Routes>
             
            <Route path='/' element={<Base/>}>
              <Route index element={<UserLoginRequired><Home/></UserLoginRequired>}/>
              <Route path='login' element={<Login/>}/>

            
            </Route>
          
           <Route path='/admin' element={<Admin/>}>
                    <Route index element={<AdminLoginRequired><AdminPanel/></AdminLoginRequired>}></Route>
                    <Route path='login' element={<AdminLogin/>}/>



           </Route>

        </Routes>
       </Authentication>



    </>
  );
}
export default App;
