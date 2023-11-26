import React from "react";
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

export const Navigation: React.FC = () => {
  return (
  <nav>
    <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
      <Grid item xs={1}>
        <Link to="/">Search</Link>
      </Grid>
      <Grid item xs={1}>
        <Link to="/favorites">Favorites</Link>
      </Grid>
    </Grid>
  </nav>
  )
}