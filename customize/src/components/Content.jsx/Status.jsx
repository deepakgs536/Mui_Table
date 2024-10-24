import { Stack, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'

function Status({status = 0}) {

    const [active,setActive] = useState(status) ;
    const handleclick = (event) =>{
        setActive(!active)
        
    }
  return (
    <Stack spacing={1} direction={'row'} sx={{ alignItems:'center'}}>
      <Switch value={active} onClick={handleclick} 
      color='#49C792'
      sx={{
        pr: '11px',
        pl: '7.5px',
        '& .MuiSwitch-track': {
          height: 20, // Height of the track
          borderRadius: 10, // Rounded corners for the track
          backgroundColor: active ? '#00C700' : '#ccc', // Track color based on active state
        },
        '& .MuiSwitch-thumb': {
          color: '#FFFFFF', // Thumb color
          height: 16, // Thumb height
          width: 16, // Thumb width
          marginTop: 0.6, // Center the thumb vertically within the track
        },
      }}
      />
      <Typography>
        {active ? 'Active' : 'Inactive'}
      </Typography>
    </Stack>
  )
}

export default Status
