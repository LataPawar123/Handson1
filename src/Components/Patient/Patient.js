// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// function Patients() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 128,
//           height: 128,
//         },
//       }}
//     >
//       <Paper elevation={0} />
//       <Paper />
//       <Paper elevation={3} />
//     </Box>
//   );
// }
// export default Patients;
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Patient.css"

function Patient() {
  return (
    <div>
      <h1> FAQ</h1>
      <Accordion
      id="accordion"
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="accordion-title">Why us?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  id="accordion-content">
            We provide excellent services for patients who need urgent treatments.have an flexible treatments.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       id="accordion"
        style={{
          maxWidth: "600px",
          margin: "2rem auto",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography id="accordion-title">Our Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="accordion-content" >
          We provide services to both doctors and patients on urgent basis.we have app an DRS and also you can connect us through hospitals under uk/us regions by registering.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       id="accordion"
        style={{
          maxWidth: "600px",
          margin: "2rem auto",
        }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography id="accordion-title">How to connect?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography id="accordion-content">
           Using an app and registering with the same called as  DRS you can connect with us for treatments
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default Patient;


