import React from 'react'
import { Typography, TextField, Button } from '@mui/material'
const First = ()=> {
  return (
    <div>
      <h1>Blog form</h1>
      <h4>Enter blog name</h4>
      <TextField placeholder="Blog Name" />
      <br></br>
      <h4>Description </h4>
      <TextField placeholder="Description" />
      <br></br>
      <h4>Authors name</h4>
      <TextField placeholder="Author's Name" />
      <br></br><br></br>
      <Button color='error'>CREATE BLOG</Button>
      <br></br><br></br>
  
   
    </div>
  )
}

export default First