import Feedback from './Active/Feedback'
import { Box, Button, Stack, IconButton, Typography, Divider } from '@mui/material'
import React from 'react'
import Styles from './Styles'

function Active() {
  return (
    <Box sx={{bgcolor:'#FFFFFF', borderLeft:'1px #e0e0e0 solid'}}>
      <Box sx={{borderBottom:'0px grey solid' , py:'14.4px'}}>
        <Typography color='error'sx={{...Styles.HeaderStyle, textAlign:'center' }}>Actions</Typography>
      </Box>
      <Divider flexItem />
      <Stack spacing={3.9} sx={{p:'20px'}}>
        <Feedback/>
        <Feedback/>
        <Feedback/>        
      </Stack>
    </Box>
  )
}

export default Active
