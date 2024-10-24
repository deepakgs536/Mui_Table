import React from 'react'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'

export default function NeedToImprove() {
  return (
    <Stack direction={'row'} spacing={0.5} >
      <Typography sx={{color:'#484759' , fontSize:'12px' , whiteSpace:'nowrap'}}>Overall </Typography>
      <Typography sx={{color : '#353448' , fontSize:'12px' , whiteSpace:'nowrap' , fontWeight:'550'}}>Need to improve</Typography>
    </Stack>
  )
}
