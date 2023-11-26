import React, { useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import debounce from 'lodash/debounce';
import { useSearch } from '../hooks/useSearch';

type Props = {
  onSearch: (variables: any) => void
}

export const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const {
    search,
    handleSetSearchQuery,
    handleSetIsTyping,
    handleSetAfterCursor
  } = useSearch();

  const { searchQuery } = search;

  useEffect(() => {
    onSearch(searchQuery);
  }, [])

  const debouncedSearch = debounce((value) => {
    handleSetIsTyping(false);
    onSearch(value);
  }, 300);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleSetSearchQuery(value);
    handleSetIsTyping(true);
    debouncedSearch(value);
    handleSetAfterCursor(null);
  };

  const handleClearSearch = () => {
    handleSetSearchQuery('');
    debouncedSearch('');
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={11}>
        <TextField
          label="Enter GitHub repository search query"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" onClick={handleClearSearch}>
          Clear
        </Button>
      </Grid>
    </Grid>
  )
}