import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e0e0e0',
        py: 3,
        mt: 'auto', // gestione sticky!
      }}
    >
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{
            color: '#666',
            fontWeight: '500',
            fontSize: '0.95rem',
          }}
        >
          Ratatouille - Made with ❤️
        </Typography>
      </Container>
    </Box>
  );
}
