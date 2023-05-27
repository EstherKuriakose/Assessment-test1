import React from 'react'
import { AppBar, Button,Toolbar, Typography, colors } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return ( 
    <div>
      <AppBar position='sticky' sx={{top:'auto',bottom: 0}}>


            <Toolbar>
                <Typography color={'white'} variant='h3' align='left' sx={{flexGrow:1}}>BLOG DASHBOARD</Typography>
                <Button variant='text' color='warning'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>HOME</Link></Button>
                <Button variant='text' color='warning'><Link to={'/addblog'} style={{textDecoration:'none',color:'white'}}>ADD BLOG</Link></Button>
            </Toolbar>

        </AppBar>

    </div>
  )
}

export default Navbar