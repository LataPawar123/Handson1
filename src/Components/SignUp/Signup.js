import React from "react";
import {
  Alert,
  TextField,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Avatar,
  Typography,
  FormGroup,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useState } from "react";
import Image from "../Images/signbg.jpg";
import styles from'./Signup.css';





 const Signup = () => {
  const styles = {
    container: {
      backgroundImage: `url(${Image})`,
    },
  };
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirm: data.get(" password_confirm"),
      number: data.get("number"),
    };
    // const {
    //   register,
    //   handleSubmit,
    //   formState: { errors },
    //   reset,
    //   trigger,
    // } = useForm();

    // const onSubmit = (data) => {
    //   console.log(data);
    //   reset();
    // };

    // style={ {width:'80%',
    // marginLeft: 'auto',
    // marginRight: 'auto'}}

    // const handleChange =(value)=> {
    // this.setState({
    //  this.phone= value
    // });

    if (
      actualData.name &&
      actualData.email &&
      actualData.tc !== null &&
      actualData.password &&
      actualData.password_confirm
    ) {
      if (actualData.password === actualData.password_confirm) {
        document.getElementById("Signup-form").reset();
        setError({ status: true, msg: "Sign up Succesful", type: "success" });
        // alert("sign up Succesful");
        navigate("/LoginReg ");
      } else {
        setError({
          status: true,
          msg: "Paasword entered needs to be the same",
          type: "error",
        });
        document.getElementById("Signup-form").reset();

        // alert("password and confirm password should be same")
        setTimeout(() => {
          // navigate("/Signup")
        }, 1000);
      }
    } else {
      setError({
        status: true,
        msg: "All fields are mandatory",
        type: "error",
      });
      //  navigate(" ")
      // alert("all fields are mandatory")
    }
  };
  return (
    <>
      <Grid
        component="form"
        container
        
        noValidate
        id={"Signup-form"}
        onSubmit={handleSubmit}
        xs={12}
          style={{marginTop:'15px',width:"700px" ,height:"500px",overflowY:"auto"}}
        
      >
        <Grid
          align="center"
      
        >
          <Grid item xs={3}     style={{maxWidth:"70%"}} className="" square>
            <Avatar
              sx={{ mt: 1 }}
              src="Img"
              style={{ backgroundColour: "green", }}
            ></Avatar>

            <b>Register</b>
            <br />
            {/* <Typography variant="h4" colour="primary"> */}
            <p style={{width:"380px",color:"black",textDecoration:"italic"}}> Please fill this form to create an account!</p> 
            {/* </Typography> */}

            <TextField
             className={styles.Test}
              margin="normal"
              helperText=""
              required
              fullWidth
              id="name"
              name="name"
              label="name"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="password"
              type="password"
              helperText="this is required"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="Password_Confirmation"
              name="  confirm password"
              label=" confirm password"
              type="password"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="mob number"
              name="mob number"
              label=" mob number"
              type="number"
            />
            {/* <MuiPhoneNumber defaultCountry={'ind'} /> */}

            {/* <grid>
    {/* <FormGroup style={{display: "inlineBlock"}}>
      
      <FormControlLabel control={<Checkbox />} />
    </FormGroup>
    {/* <div>I accept the <a href='https://www.termsandconditionsgenerator.com/'>terms</a> and <a href='https://www.termsandconditionsgenerator.com/'>Conditions</a> </div> */}
            {/* </grid> */}
            <FormControlLabel
              control={
                <Checkbox value="agree" color="primary" name="tc" id="tc" />
              }
              label="i agree to terms and conditions."
            />

            {/* <TextField  margin='normal'  required fullWidth id="mob no" name='mob no'  label="mob no" type="number" /> */}
          </Grid>
          <Box id="sign-up" textAlign="center">
            <Button
              variant="contained"
              sx={{ mt: 1, mb: 2, px: 5 }}
              type="submit"
              
            >
              <NavLink to="/LoginReg" style={{alignItems: 'center'}}> Join </NavLink>  
            </Button>
          </Box>

          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        </Grid>
      </Grid>
    </>
  );
};
export default Signup;