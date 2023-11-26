import React from 'react';
import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{
      margin: '0 auto',
      maxWidth: '1024px',
      padding: '20px'
    }}>
      {children}
    </Box>
  )
}