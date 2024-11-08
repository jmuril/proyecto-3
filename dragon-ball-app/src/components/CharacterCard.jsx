import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const CharacterCard = ({ character, onClick }) => {
  return (
    <Card 
      onClick={onClick} 
      sx={{
        maxWidth: 200,
        cursor: 'pointer',
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="280"
        image={character.image}
        alt={character.name}
        sx={{ objectFit: 'contain', backgroundColor: '#555', p: 1, borderRadius: '8px' }}
      />
      <CardContent sx={{ backgroundColor: '#444' }}>
        <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
          {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: '#f0c040' }}>
          {character.race} - {character.gender}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Base Ki:</strong> {character.ki}
        </Typography>
        <Typography variant="body2">
          <strong>Total Ki:</strong> {character.maxKi}
        </Typography>
        <Typography variant="body2">
          <strong>Afiliación:</strong> {character.affiliation}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
