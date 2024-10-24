import { Stack, Typography } from '@mui/material'
import React from 'react'

function SignalsTooltip() {
  return (
    <Stack direction={'column'}>
      <Typography sx={{fontSize:'14px' , fontWeight:'550' , color:'#424154'}}>Excellent</Typography>
      <Stack direction={'row'} spacing={1}>
        <Typography sx={{whiteSpace:'nowrap' , fontSize:'12px' , color:'#9999a3'}} >Last Updated</Typography>
        <Typography sx={{whiteSpace:'nowrap' , fontSize:'12px' , color:'#353448'}}>07 Feb '23, 11:30 AM</Typography>
      </Stack>
    </Stack>
  )
}

export default SignalsTooltip
