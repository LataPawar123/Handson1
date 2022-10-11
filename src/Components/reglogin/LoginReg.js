import { Card, Grid,Tabs,Tab,Typography,Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import pic from "../Images/bgpic.png"
import Signup from "../SignUp/Signup";
import UserLogin from '../LogIn/UserLogin'
import Loginmix from "../Loginmix/Loginmix";


const TabPanel=(props)=>{
    const {children,value,index}=props;
    return(
        <div role="tabpanel" hidden={value!==index} > {
        value === index && (
            <Box>{children}</Box>
        )
}
        </div>
    )

}
  export function Copyright() {
    return (
   <div  style={{display:"flex",color:"white",height:"50px",alignItems:"bottom",justifyContent:"center"}}>
      <Typography variant="body2"  style= {{color:"text.secondary",position:"relative",bottom:0,textAlign:"center",marginBottom:"10px"}}>
        {'Copyright © Pooja Pawar'} {"   "}
        <Link color="inherit" href="https://mui.com/" >
          website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </div>
    );
  }

const LoginReg=()=>{
    const [value , setValue]=useState(0);
    const handleChange=(event,newValue)=>{
       
        setValue(newValue);
        console.log(newValue);
    }
return(
    <>
    
    <Grid container sx={{height:"80vh",mb:10,mt:5}}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage:`url(${pic})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            backgroundPosition:"center",
            display:{xs:"none" , sm:"block"} 
        }}>
       
        </Grid>
        <Grid item lg={5} sm={7}>
            <Card sx={{width:"80%", height:"100%",pt:4,ml:10}}>
                <Box>
                    <Box sx={{borderBottom:2 ,borderColor:"divider",alignItems:"center"}}>
                      <Tabs value={value} textColor="secondary" indicatorColor="secondary"justify-content="center" onChange={handleChange}>
                         <Tab  label="Login" sx={{textTransform:"none",fontWeight:"bold",fontSize:20}}></Tab>
                         <Tab   label="Sign Up" sx={{textTransform:"none",fontWeight:"bold",fontSize:20}}></Tab>
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>{<UserLogin/>}</TabPanel>
                    <TabPanel value={value} index={1}>{<Loginmix/>}</TabPanel>
                </Box>

            </Card>
        </Grid>
        
    </Grid>
    
        
    <Box  component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          pooja_pawar2@pers.com
        </Typography> */}{"   "}
{/* sx={{ bgcolor: 'background.paper', p: 10 ,mt:10 ,position:"fixed",bottom:10 }} */}
        {/* {"  "}
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
            {" "}
            {" " }
            Persistent Systems Ltd.
        </Typography>
        <Copyright /> */}
        <Copyright/>
      </Box>
    
    </>
    
)

}

export default  LoginReg;