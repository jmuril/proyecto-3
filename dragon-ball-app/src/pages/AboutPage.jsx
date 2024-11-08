import React from 'react';
import { Typography, Container, Box, Card, CardContent } from '@mui/material';

const AboutPage = () => (
  <Container maxWidth="sm" sx={{ mt: 4 }}>
    <Card sx={{ backgroundColor: '#1f1f1f', color: '#fff', boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            Acerca de
          </Typography>
        </Box>
        <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
          Esta aplicación fue desarrollada con React y Material-UI para ofrecer una experiencia visual atractiva e interactiva. 
          La API de Dragon Ball proporciona los datos para explorar los personajes de esta icónica serie.
          Creada por: Jairo Andres Murillo Ducuara 
          ING.sistemas 
        </Typography>
        <Typography variant="body2" align="center" color="#fff">
          ¡Gracias por visitar nuestra aplicación!
        </Typography>
      </CardContent>
    </Card>
  </Container>
);

export default AboutPage;

