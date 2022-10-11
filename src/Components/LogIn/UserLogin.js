import React from 'react';
import { TextField,Button , Box , Alert, Grid } from '@mui/material';
import { NavLink ,useNavigate} from 'react-router-dom';
import { useState } from 'react';

const UserLogin = () => { 
 
const [error ,setError] = useState({
  status: false ,
  msg:"",
  type:""
});
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData={
      email: data.get("email"),
      password: data.get("password")
     
    }
   
      if (actualData.email &&  actualData.password){
       console.log("email,password",actualData);
         document.getElementById("login-form").reset();
         setError({status:true,msg:"Login Succesful" , type:"success"})
          // alert("login Succesful");
          navigate("/")
        }else{
         setError({status:true,msg:"All fields are mandatory" , type:"error"});
          navigate("/UserLogin")
        // alert("all fields are mandatory")
        }

  }
  return (
    <>
      <Grid container justifyContent="center" sx={{mt:10}} >
        <Grid item sm={5} xs={10}>
        <Box component="form" noValidate sx={{mt:1}} id={"login-form"} onSubmit={handleSubmit} >
            
            
            <TextField  margin='normal' required fullWidth id="email" name='email'  label="Email Address"  />
            <TextField margin='normal'  required fullWidth id="password" name='password'  label="password" type="password"/>
            {/* <TextField  margin='normal'  required fullWidth id="mob no" name='mob no'  label="mob no" type="number" /> */}
           
            <Box id="sign-in" textAlign="center">
              <Button  variant="contained" sx={{mt:3, mb:2, px:5}} type="submit">login</Button>
            </Box>
            <box>
 <NavLink to="/sendpasswordresetemail" > Forgot Password      </NavLink> 
<br/>
        
         <NavLink to="/Signup" > Create account </NavLink>

            </box>
           

         {error.status?<Alert severity={error.type}>{error.msg}</Alert>:""}
        </Box>
        </Grid>
        </Grid>
    </>
  )
}

export default UserLogin;