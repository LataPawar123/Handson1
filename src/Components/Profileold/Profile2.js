//  import React from "react";

//  const Patient=()=>{
//      return(
//         <>
//         {/* <h1>patient page</h1> */}

    
//         </>

//      )
//  }
//   export default  Patient;

import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';

 

export default function Patient() {
    const [data, getData] = useState([]);


    const url="https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        fetchData()
    }, [])
 
    const fetchData = () => {
        fetch(url,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }})
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }

  return (
    <>
    <div>
        <table sx={{ml:5}}>
        <tbody sx={{mt:5,ml:5}}>
        <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Username</th>
             <th>Email</th>

            </tr>


        
    {data.map((item, i) => (
                <tr key={i}  sx={{mt:5,ml:5}} style={{border: "1px solid #ddd",
                    padding: "8px", alignItems:"center", width: "100%",height: "50px"}}>
                   
                    <td style={{textAlign:"center"}}> {item.name}</td>
                    <td style={{textAlign:"center"}}>{item.id}</td>
                    <td style={{textAlign:"center"}}>{item.username}</td>
                    <td style={{textAlign:"center"}}>{item.email}</td>
                  
                </tr>
            ))}

</tbody>
</table>
    </div>
  <hr/>
    
     </>

  );
}
