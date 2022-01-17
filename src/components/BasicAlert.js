import { string } from 'prop-types';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const BasicAlert = ({ message }) => (
  <Stack sx={{ marginTop: '0.5rem' }}>
    <Alert severity="error">{message}</Alert>
  </Stack>
);

BasicAlert.propTypes = string.isRequired;

export default BasicAlert;
