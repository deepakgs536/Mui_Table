import React from 'react'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'

function Experience({years , months}) {
  return (
    <Stack direction={'row'} spacing={1}>
        <Typography sx={{ whiteSpace: 'nowrap' }}>
            {years ? `${years} Yrs` : ''}
            {years && months ? ' ' : ''}  {/* Add separator only if both exist */}
            {months ? `${months} Mon` : ''}
        </Typography>

    </Stack>
  )
}

export default Experience
