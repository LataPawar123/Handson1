import React from 'react'
import {Grid ,textField ,Button , Box ,Alert,TextField,Typography} from "@mui/material"
import { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'


const ResetPassword = () => {

 
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
            password: data.get("password"),
            confirm_password: data.get("confirm_password")
           
          }
         
            if (actualData.confirm_password &&  actualData.password){
             console.log("confirm_password,password",actualData);
              if(actualData.confirm_password===actualData.password){
                   
                
                setError({status:true, msg: "Password Reset Succesful....Redirecting to Login Page" , type:"success"})
                //  alert("Email Sent please check your mail.");
                document.getElementById("password-reset-form").reset(); 
                navigate("/Login")

              }else{

                setError({status:true,msg:"Paasword entered needs to be the same" , type:"error"});
                document.getElementById("password-reset-form").reset();
                
                // navigate("/Login")
                // alert("password and confirm password should be same")
              }

              }else{
               setError({status:true,msg:"All fields are mandatory" , type:"error"});
                // navigate("/L")
              // alert("Enter  correct details")
              }
      
        }

  return (
    
    <>
     <Grid container justifyContent="center">
        <Grid item sm={3} xs={12}>
     <Box component="form" noValidate sx={{mt:15}} id={"login-form"} onSubmit={handleSubmit} >
            
             <Typography variant="h4" justifyContent="center"> Reset Form</Typography>
           
            <TextField margin='normal'  required fullWidth id="password" name='password'  label="password" type="password"/>
            <TextField margin='normal'  required fullWidth id="Password_Confirmation" name='  confirm password'  label=" confirm password" type="password"/>
            {/* <TextField  margin='normal'  required fullWidth id="mob no" name='mob no'  label="mob no" type="number" /> */}
           
            <Box id="re" textAlign="center">
              <Button  variant="contained" sx={{mt:3, mb:2, px:5}} type="submit"  component={NavLink }  to="/Login"  > Save</Button>
            
            </Box>
            <NavLink to="/UserLogin" style={{alignItems: 'center'}} > Back to Login? </NavLink> 
<br/>
         {error.status?<Alert severity={error.type}>{error.msg}</Alert>:" "}
         
        </Box>
        </Grid>
        </Grid>

    </>

 
  )
}

export default ResetPassword;