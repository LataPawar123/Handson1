
import { Grid,TextField ,Button,Box ,Alert } from '@mui/material';
import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';

const SendPasswordResetEmail = () => {

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
            email: data.get("email")
           
          }
         
            if (actualData.email ){
         
               document.getElementById("password-reset-email-form").reset();
               setError({status:true,msg:"Email Sent Succesful" , type:"success"})
                // alert("Email Sent please check your mail.");
                navigate("/ResetPassword")
              }else{
               setError({status:true,msg:"email field is mandatory" , type:"error"});
                
              // alert("please enter valid email")
              }
      
        }


  return (
    <>

     <Grid container justifyContent="center">
        <Grid item sm={4} xs={12}>

        <Box component="form" noValidate sx={{mt:1}} onSubmit={handleSubmit}  id="password-reset-email-form">
            
            <h1>Reset password</h1>
            <TextField  margin='normal' required fullWidth id="email" name='email'  label="Email Address"/>
           
           
            <Box textAlign="center">
              <Button  variant="contained" sx={{mt:3, mb:2, px:5}} type="submit"> send Email</Button>
            </Box>
 
<br/>
         {error.status?<Alert severity={error.type}>{error.msg}</Alert>:""}
         
    
        </Box>

        </Grid>
     </Grid>
    </>
  )
}

export default SendPasswordResetEmail;