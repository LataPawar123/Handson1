/* eslint-disable no-labels */
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Container } from "@mui/system";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import MuiAlert from '@mui/material/Alert';


import {
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";

const useStyles = makeStyles({
  container: {
    // width: 350,
    // backgroundColor: 'white',
    // height: 350,
    // color:"black",
    // position:"absolute"
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 850,
    maxHeight: "100%",
    backgroundColor: "white",
    border: "2px solid #0001",
    boxShadow: 24,
    p: 3,
  },
  form: {
    padding: 5,
    overflow: "auto",
    height: 430,
  },
  item: {
    marginBottom: 5,
    padding: 2,
  },
  button: {
    justifyItems: "center",
    marginLeft: 55,
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  backgroundColor: "white",
  border: "2px solid #0001",
  boxShadow: 24,
  p: 4,
};

function Modal2() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const [change, setChange] = useState(false);
  const[openAlert,setOpenAlert]= useState(false);
  // const [opensnack, setOpenSnack] = useState(false);

  const handleValue = () => {
    setValue(true);
  };


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  
  

  
  const handleOpen = () => setOpen(true);
  const handleClose1 = () => setOpen(false);
  const handleChange = (e) => {
    setChange(true);
  };

  return (
    <>
      {/* <Modal open={open}>
        <Container className={classes.container}>

          my modal
        </Container>
        
        </Modal> */}

      <Grid maxWidth="xl" sx={12} md={6}>
        <Button style={{marginTop:"100px", marginLeft:"100px"}} onClick={handleOpen}>Open modal</Button>
        <Modal 
          open={open}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Container sx={style}>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}

            <form className={classes.form} autoComplete="off" noValidate>
              <div className={classes.item}>
                <TextField
                  id="standard-basic"
                  label="Title"
                  size="small"
                  style={{ width: "100%" }}
                  variant="standard"
                />
              </div>
              <div className={classes.item}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  size="small"
                  style={{ width: "100%" }}
                  rows={4}
                  defaultValue="Tell us about your Diesease"
                />
              </div>
              <div className={classes.item}>
                <TextField
                  select
                  label="access"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  defaultValue="user"
                  style={{ width: "80%" }}
                >
                  <MenuItem value="hospital">Hospital</MenuItem>
                  <MenuItem value="patient">Patient</MenuItem>
                  <MenuItem value="nurse">Nurse</MenuItem>
                </TextField>
              </div>
              <div className={classes.item}>
                <FormLabel id="demo-controlled-radio-buttons-group">
                  Type of user
                </FormLabel>
                <RadioGroup
                // aria-labelledby="demo-controlled-radio-buttons-group"
                // name="controlled-radio-buttons-group"
                // value={value}
                // onChange={handleChange(e.target.value)}
                // onChange={(e) => setChange(e.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio size="small" />}
                    label="normal user"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio size="small" />}
                    label=" custom user"
                  />
                  <FormControlLabel
                    value="trans"
                    control={<Radio size="small" />}
                    label="premium user"
                  />
                </RadioGroup>
              </div>
              <div className={classes.item}>
                <Button
                  className={classes.button}
                  style={{ marginRight: 20 }}
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                   
                    setOpenAlert(true);
                    
                  }}
                >
                  Save
                </Button>

                <Button
                  className={classes.button}
                  variant="outlined"
                  color="secondary"
                  onClick={() => {
                    setOpen(false);
                    
                    
                  }}
                   >
                  {" "}
                  Cancel
                </Button>
              </div>
            </form>
          </Container>
        </Modal>

       
        
      </Grid>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '80%' }}>
           Data Saved Successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Modal2;
