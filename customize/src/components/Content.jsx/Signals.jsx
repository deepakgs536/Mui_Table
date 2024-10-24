import { Avatar, Stack, Tooltip } from '@mui/material';
import React from 'react';
import SignalsTooltip from './SignalsTooltip';

function getRandomColor() {
  const letters = ['#007c32' , '#4c9e29' , '#f2b824' , '#f2eb24' , '#de1010' ];
  return letters[Math.floor(Math.random() * 5)]; 
}


function Signals({ signals = ['A', 'B', 'C' , 'D'] }) {
  return (
    <Stack spacing={0.5} direction={'row'} nowrap>
      {signals.map((value, index) => (
        <Tooltip
        title={<SignalsTooltip/>}
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
                key={index}
                sx={{ width: '24px', height: '24px', color:'#FFFFFF' , fontSize: '15px',
                  bgcolor: getRandomColor() ,
                }}
              >
                {value}
              </Avatar>
      </Tooltip>
      ))}
    </Stack>
  );
}

export default Signals;