import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NonHumanPage = () => {
  const [nonHumans, setNonHumans] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dragonball-api.com/api/characters?page=${page}&limit=10`)
      .then(response => {
        const filteredCharacters = response.data.items.filter(character => character.race.toLowerCase() !== 'human');
        
        setNonHumans(prevNonHumans => {
          const allNonHumans = [...prevNonHumans, ...filteredCharacters];
          const uniqueNonHumans = Array.from(new Set(allNonHumans.map(c => c.id)))
            .map(id => allNonHumans.find(c => c.id === id));
          return uniqueNonHumans;
        });

        setHasMore(page < response.data.meta.totalPages && filteredCharacters.length > 0);
      })
      .catch(error => console.error('Error al obtener personajes no humanos:', error));
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10 && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: '#222', p: 3 }}>
      <Grid container spacing={3} justifyContent="center" maxWidth="lg">
        {nonHumans.map(character => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
            <CharacterCard 
              character={character} 
              onClick={() => navigate(`/character/${character.id}`)} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NonHumanPage;
