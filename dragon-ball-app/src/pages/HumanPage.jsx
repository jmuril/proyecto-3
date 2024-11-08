import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HumanPage = () => {
  const [humans, setHumans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://dragonball-api.com/api/characters?race=Human')
      .then(response => {
        const characters = Array.isArray(response.data) ? response.data : [];
        setHumans(characters);
      })
      .catch(error => console.error('Error al obtener humanos:', error));
  }, []);

  return (
    <Grid container spacing={2}>
      {humans.length > 0 ? (
        humans.map(character => (
          <Grid item xs={12} sm={6} md={4} key={character.id}>
            <CharacterCard 
              character={character} 
              onClick={() => navigate(`/character/${character.id}`)} // Navegar a detalles
            />
          </Grid>
        ))
      ) : (
        <p>No se encontraron personajes humanos.</p>
      )}
    </Grid>
  );
};

export default HumanPage;
