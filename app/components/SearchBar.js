import React from 'react'

import { Container } from '@mui/material'
import TextField from '@mui/material/TextField'

const SearchBar = () => {
  return (
    <Container
      sx={{
        // border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}
    >
      <TextField
        id="outlined-basic"
        label="🔎 Search for a card"
        variant="outlined"
        type="search"
        placeholder="eg: Great Gobelin"
        sx={{
          width: '350px'
        }}
        // value={}
        // onChange={}
      />
    </Container>
  )
}

export default SearchBar
