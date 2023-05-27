import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ApiGet = () => {
    var[users,setusers]=useState([])
   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> {
        setusers(response.data)
    })
    .catch(err=>console.log(err))
},[])

  return (
    <div>
                 <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell  style={{color:"black",fontFamily:"bold",fontSize:"20px"}}>Blog ID</TableCell>
                        <TableCell  style={{color:"black",fontFamily:"bold",fontSize:"20px"}}>Blog Title</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                  {
                    users.map((value,index)=>{
                      return(
                        <TableRow>
                          <TableCell>{value.id}</TableCell>
                          <TableCell>{value.title}</TableCell>
                          
                         
                        </TableRow>
                      )
                    })
                  }
                    </TableBody>
           
            </Table>
         </TableContainer>
    </div>
  )
}

export default ApiGet