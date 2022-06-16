//import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Authpage from './client/user-login.js';
import Home from './client/usersignup/user-signup.js';
function App(){
  return(
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Authpage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
 
export default App;
