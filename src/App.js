import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './Authentication';
import Admin from './Resources/components/Admin'

function App() {
  return (
    <>
       <Authentication>
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<Admin/>}>


            
           </Route>

        </Routes>
        
        </BrowserRouter>

       </Authentication>


    </>
  );
}

export default App;
