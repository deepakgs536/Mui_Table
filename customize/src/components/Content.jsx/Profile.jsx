import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import ProfileImage from './images/ProfileImage.png'; // Import image path as a module

function Profile({name}) {
  return (
    <Stack direction={'row'} spacing={1} alignItems='center' >
      <Avatar src={ProfileImage} sx={{width:'32px' , height:'32px'}} />
        <Typography> {name} </Typography>
    </Stack>
  );
}

export default Profile;
