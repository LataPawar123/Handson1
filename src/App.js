
import './App.css';
import { Route, Routes} from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css.map"
import Aboutus from './Components/About/Aboutus';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Home from './Components/Home/Home';
import Treatment from './Components/Treatment/Treatment';
import Contact from './Components/Contact/Contact';
import Patient from './Components/Patient/Patient';

import Menu2 from './Components/menu/Menu2';
import Profile from './Components/Profile/Profile';
import Table2 from './Components/Table/Table2';
import Modal2 from './Components/modal/Modal2';
import Restfull from './Components/restapidta/Restfull';
import Signup from './Components/SignUp/Signup';
import LoginReg, { Copyright } from './Components/reglogin/LoginReg';
import SendPasswordResetEmail from "./Components/sendpasswordresetemail/SendPasswordResetEmail"
import ResetPassword from "./Components/ResetPasswordMail/ResetPassword"
import Logout from './Components/Logout/Logout';
import StandardImageList from './Components/Imagelist/StandardImageList';
import Loginutube from './Components/Loginutube/Loginutube';
import Loginmix from './Components/Loginmix/Loginmix';
import ConfirmPassword from './Components/LogIn/ConfirmPassword';
import Trial from './Components/LogIn/trial';

function App() {
  // by pooja
  return (
    <div className="App">
      {/* <ResponsiveAppBar/> */}
      <Menu2/>
      
    
      <Routes>
        <Route path="/" element={<LoginReg/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="LoginNew" element={<newupdatedLogin/>}/>
        <Route path="Trial" element={<Trial/>}/>
        <Route path="Password" element={<ConfirmPassword/>}/>
        <Route path="Aboutus" element={<Loginmix/>}/>
        {/* <Route path="/Patients" element={<Aboutus/>}/> */}
        <Route path="Treatment" element={<Treatment/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Patient" element={<Patient/>}/>
        <Route path="Modal" element={<Modal2/>}/>
        <Route path="Profile" element={<Restfull/>}/> 
        <Route path="Modal2" element={<Modal2/>}/>
        <Route path="Table2" element={<Table2/>}/>
        <Route   path="LoginReg" element={<LoginReg/>}/>
            <Route   path="Signup" element={<Signup/>}/>
            <Route   path="SendPasswordResetEmail" element={<SendPasswordResetEmail/>}/>
            <Route   path="ResetPassword" element={<ResetPassword/>}/>
            <Route   path="Logout" element={<LoginReg/>}/>
            <Route   path="Loginmix" element={<Loginmix/>}/>

           
            {/* <Route   path="Card" element={<Card2/>}/> */}
            <Route   path="StandardImageList" element={<StandardImageList/>}/>

      </Routes>
      <Copyright/>
    </div>
  );
}

export default App;
