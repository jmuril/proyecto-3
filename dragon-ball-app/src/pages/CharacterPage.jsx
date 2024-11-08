import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CardMedia, Typography, Box, Grid, Paper, Divider } from '@mui/material';

const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => setCharacter(response.data))
      .catch(error => console.error('Error al obtener personaje:', error));
  }, [id]);

  if (!character) return <Typography variant="h6" sx={{ textAlign: 'center', mt: 4, color: '#fff' }}>Cargando...</Typography>;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, bgcolor: '#1c1c1c', minHeight: '100vh', py: 4 }}>
      <Paper elevation={4} sx={{ maxWidth: 900, p: 3, backgroundColor: '#2b2b2b', color: '#fff', borderRadius: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
            <CardMedia
              component="img"
              image={character.image}
              alt={character.name}
              sx={{ borderRadius: 2, height: 350, objectFit: 'contain', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" gutterBottom sx={{ color: '#ffd700' }}>{character.name}</Typography>
            <Divider sx={{ backgroundColor: '#555', my: 2 }} />
            <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 1 }}><strong>Raza:</strong> {character.race}</Typography>
            <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 1 }}><strong>Género:</strong> {character.gender}</Typography>
            <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 1 }}><strong>Descripción:</strong> {character.description}</Typography>
            <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 1 }}><strong>Ki:</strong> {character.ki}</Typography>
            <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 1 }}><strong>Máximo Ki:</strong> {character.maxKi}</Typography>
            <Typography variant="body1" sx={{ color: '#bdbdbd', mb: 1 }}><strong>Afiliación:</strong> {character.affiliation}</Typography>
            {character.originPlanet && (
              <Typography variant="body1" sx={{ color: '#bdbdbd', mt: 2 }}>
                <strong>Origen:</strong> {character.originPlanet.name} - {character.originPlanet.description}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default CharacterPage;
