import React from 'react'
import Typography from '@mui/material/Typography'

function Role({role}) {
  return (
    <Typography sx={{whiteSpace:'nowrap'}}>{role}</Typography>
  )
}

export default Role
