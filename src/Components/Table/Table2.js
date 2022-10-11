import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Container } from "@mui/system";
import { useState } from "react";
import { Typography,Grid } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function Table2() {
  const [value, setvalue] = useState("");
  const [rowss, setRowss] = useState(rows);
  const [tablefilter, setTablefilter] = useState([]);


  const filterData = (e) => {
    console.log(e.target.value)
    console.log("after e value")
    if (e.target.value !== "") {
      setvalue(e.target.value);
      
      const filterData = rows.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k])
            .toLocaleLowerCase()
            .includes(e.target.value.toLocaleLowerCase())
        )
      );
      
      
      setRowss(filterData);
      console.log( rowss )
    } else {
      setvalue(e.target.value);
      setRowss(rows)
    }
  };

 
  return (
    <>
    <Grid>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          {/* <span className="input-group-text" id="basic-addon1">
            Search
          </span> */}
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={value}
          onChange={e=>filterData(e)}
          aria-label="Username"
          aria-describedby="basic-addon1"
         style={{width:"300px", maxWidth:"40%",justifyContent:"center",marginLeft:"26%" ,marginTop:"100px",display:"flex"}} 
        />
      </div>
     {rowss && rowss.length===0 && <Typography color="white">Not Found</Typography>}
     {rowss && rowss.length>0  &&
      <TableContainer component={Container}
        sx={{ maxWidth: 550, margin: "70px", marginLeft: 30 }}
        style={{ align: "center", poistion: "absolute", color: "white", marginTop:"40px" }}
      >
        <Table aria-label="simple table" align="center" style={{backgroundColor:"white", width:"900px", marginLeft:"13%"}}>
          {/* sx={{ maxWidth: 540 }} */}
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "25%",padding:"normal", align: "center",borderRight:"2px solid white" }}>
                Dessert (100g serving)
              </TableCell>
              <TableCell style={{ width: "25%", align: "center",padding:"normal",borderRight:"2px solid white"}}>
                Calories
              </TableCell>
              <TableCell style={{ width: "25%", align: "center",padding:"normal",borderRight:"2px solid white" }}>
                Fat&nbsp;(g)
              </TableCell>
              <TableCell style={{ width: "25%", align: "center",padding:"normal",borderRight:"2px solid white" }}>
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell style={{ width: "25%", align: "center",padding:"normal",borderRight:"2px solid white" }} border>
                Protein&nbsp;(g)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowss && rowss.map((row) => (
              <TableRow
              style={{padding:"normal",borderRight:"2px solid white"}} 
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{borderRight:"2px solid white"}} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell  style={{padding:"normal",borderRight:"2px solid white"}}  align="right">{row.calories}</TableCell>
                <TableCell  style={{padding:"normal",borderRight:"2px solid white"}}  align="right">{row.fat}</TableCell>
                <TableCell  style={{padding:"normal",borderRight:"2px solid white"}} align="right">{row.carbs}</TableCell>
                <TableCell  style={{padding:"normal",borderRight:"2px solid white"}}  align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
}
</Grid>
    </>
  );
}

export default Table2;
