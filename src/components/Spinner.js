import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner = () => (
  <Box
    sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress />
  </Box>
);

export default Spinner;
