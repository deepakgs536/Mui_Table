import { Avatar, Box, Tooltip } from '@mui/material'
import React from 'react'
import Performance from './images/PerformanceMeter.png'
import NeedToImprove from './NeedToImprove'

function OverallPerformance() {
  return (
    <Box 
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'    
    }}
>
<Tooltip
  title={<NeedToImprove/>}
  slotProps={{
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, -14],
          },
        },
      ],
    },
    tooltip: {
      sx: {
        bgcolor: 'white', 
        color: 'black', 
        boxShadow: 3,
      },
    },
  }}
>
  <Avatar 
    src={Performance} 
    sx={{ width: '50px', height: '50px', p: '0px' }}
  />
</Tooltip>

    </Box>

  )
}

export default OverallPerformance