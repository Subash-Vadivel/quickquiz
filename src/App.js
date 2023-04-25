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
import Profile from './Resources/User_Pages/pages/Profile/Profile';
import AutoLayoutExample from './Resources/User_components/Question/AutoLayoutExample';
import LeaderBoard from "./Resources/User_Pages/LeaderBoard"
import UserDetails from './Resources/User_Pages/UserDetails';
import AccessControl from './Resources/Admin_Pages/AccessControl';
import BecomeaMember from '../src/Resources/User_Pages/Footer_Pages/BecomeaMember'
import ContactUs from '../src/Resources/User_Pages/Footer_Pages/ContactUs'
import Support from '../src/Resources/User_Pages/Footer_Pages/Support'
import About from '../src/Resources/User_Pages/Footer_Pages/About'
import TermsCondition from './Resources/User_Pages/Footer_Pages/TermsCondition';
import UpdateQuestion from './Resources/Admin_Pages/UpdateQuestion';

function App() {
  return (
    <>
       <Authentication>
        <Routes>
             
            <Route path='/' element={<UserLoginRequired><Base/></UserLoginRequired>}>
              <Route index element={<Home/>}/>
              <Route path='practice' element={<Practice/>}></Route>
              <Route path='test' element={<Test/>}></Route>
              <Route path='profile' element={<Profile/>}></Route>
              <Route path='details' element={<UserDetails/>}></Route>
              <Route path='leaderboard' element={<LeaderBoard/>}></Route>
              <Route path='becomeamember' element={<BecomeaMember/>}></Route>
              <Route path='contactus' element={<ContactUs/>}></Route>
              <Route path='support' element={<Support/>}></Route>
              <Route path='about' element={<About/>}></Route>
              <Route path='terms&conditions' element={<TermsCondition/>}></Route>
            </Route>
            
            <Route path='login' element={<Login/>}/>
            <Route path='/taketest/:id' element={<AutoLayoutExample/>}></Route>
           <Route path='/admin' element={<AdminLoginRequired><Admin/></AdminLoginRequired>}>
                    <Route index element={<DashBoard/>}></Route>
                    <Route path="setquestion" element={<QuestionSet/>}></Route>
                    <Route path="moderator" element={<AccessControl/>}></Route>
                    <Route path="updatequestion" element={<UpdateQuestion/>}></Route>



           </Route>
           
           <Route path='admin/login' element={<AdminLogin/>}/>
        </Routes>
       </Authentication>



    </>
  );
}
export default App;
