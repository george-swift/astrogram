import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { objectOf, string } from 'prop-types';

const Spinner = ({ wUnit, hUnit }) => (
  <Box
    sx={{
      width: `100${wUnit}`,
      height: `100${hUnit}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <CircularProgress />
  </Box>
);

Spinner.propTypes = objectOf(string).isRequired;

export default Spinner;
