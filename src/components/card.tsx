import React from 'react';
import { Card, Grid, Typography, Box, Container, Link } from '@mui/material';

const cardData = [
  {
    title: 'Orlando',
    date: 'April 24-26, 2024',
    imageUrl: 'https://picsum.photos/id/237/200/300',
  },
  {
    title: 'San Diego',
    date: 'April 24-26, 2024',
    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    title: 'NYC',
    date: 'April 24-26, 2024',
    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
  },
  {
    title: 'Houston',
    date: 'April 24-26, 2024',
    imageUrl: 'https://picsum.photos/200/300?grayscale',
  },
  {
    title: 'Las Vegas',
    date: 'April 24-26, 2024',
    imageUrl: 'https://picsum.photos/200/300',
  },
];

const CardComponent = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                position: 'relative',
                height: 250,
                overflow: 'hidden',
                '&:hover': {
                  '.readMore': {
                    opacity: 1,
                    transform: 'translateY(0)', // Smooth slide-up effect for "Learn More"
                  },
                },
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  backgroundImage: `url(${card.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    left:'15px', // Smooth zoom effect
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 2,
                    right: 0,
                    color: 'white',
                    padding: 2,
                    textAlign: 'left',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: 28,
                      fontWeight: 900,
                      color: '#fff',
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Arial',
                      fontSize: 16,
                      fontWeight: 400,
                      color: '#fff',
                      margin: 0,
                    }}
                  >
                    {card.date}
                  </Typography>

                  <Link
                    href="#"
                    className="readMore"
                    sx={{
                      display: 'block',
                      marginTop: 1,
                      color: 'white',
                      fontWeight: 'bold',
                      opacity: 0, // Initially hidden
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                      transform: 'translateY(10px)', // Slide-up effect
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Learn More
                  </Link>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardComponent;
