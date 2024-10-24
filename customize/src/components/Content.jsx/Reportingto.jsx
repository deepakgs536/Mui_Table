import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'
import ReportingImage from './images/image.png'

function Reportingto({ name = 'John Wich', more = 0 }) {
    return (
      <Stack spacing={1} direction={'row'}alignItems='center'>
        <Avatar src={ReportingImage} />
        <Typography>{name}</Typography>
        {more != 0 && (
          <Typography color="#49c792">+{more} more</Typography>
        )}
      </Stack>
    );
  }
export default Reportingto
