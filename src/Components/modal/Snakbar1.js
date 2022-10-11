import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import MuiAlert from '@mui/material/Alert';



function Snakbar1() {

  const[openAlert,setOpenAlert]=useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  
  
  
  return (
  <>
  <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '80%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
  
  </>
  )
}

export default Snakbar1