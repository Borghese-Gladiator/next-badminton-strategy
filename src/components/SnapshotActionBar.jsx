import { useState } from 'react';
import { Box, Button } from '@mui/material'



const SnapshotActionBar = ({ actions = [] }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      p: 1,
      m: 1,
    }}>
      {
        actions.map(({ text, func }) => {
          return (
            <Button
              variant="contained"
              onClick={() => func()}
              sx={{ p: 1, m: 1 }}
            >
              {text}
            </Button>
          )
        })
      }
    </Box>
  )
}

export default SnapshotActionBar;