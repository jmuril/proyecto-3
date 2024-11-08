import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CharacterPage from './pages/CharacterPage';
import HumanPage from './pages/HumanPage';
import NonHumanPage from './pages/NonHumanPage';
import AboutPage from './pages/AboutPage';
import { Container, Button, ButtonGroup, Box } from '@mui/material';

const App = () => {
  return (
    <Router>
      <Container>
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          <ButtonGroup variant="contained" aria-label="button group" sx={{
            '& .MuiButton-root': {
              backgroundColor: '#ff8c00', // Color naranja
              color: '#fff',
              transition: 'transform 0.2s ease',
            },
            '& .MuiButton-root:hover': {
              transform: 'scale(1.05)', // Sobresale al pasar el cursor
              backgroundColor: '#ff751a', // Color naranja oscuro al hacer hover
            },
          }}>
            <Button component={Link} to="/">Home</Button>
            <Button component={Link} to="/human">Humanos</Button>
            <Button component={Link} to="/nonhuman">No Humanos</Button>
            <Button component={Link} to="/about">Acerca de</Button>
          </ButtonGroup>
        </Box>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/human" element={<HumanPage />} />
          <Route path="/nonhuman" element={<NonHumanPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
