import { Button, IconButton, Stack } from '@mui/material'
import React from 'react'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Styles from '../Styles'

function Feedback() {
  return (
    <Stack direction={'row'} spacing={2.5}>
            <Button variant='contained' sx={{...Styles.FeedbackButton , ...Styles.BodyStyle , color:'#FFFFFF'}}>
                Add feedback
            </Button>
            <IconButton sx={{bgcolor:'#eefbf6',}}>
              <CreateOutlinedIcon  sx={Styles.EditIcon} />
            </IconButton>
        </Stack>
  )
}

export default Feedback
