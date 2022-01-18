/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { FaSistrix } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import parseISO from 'date-fns/parseISO';
import { dateSetter } from '../utils';

const CustomDatePicker = ({
  start, updateStart, recent, end, updateEnd, filter,
}) => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Stack component="form" spacing={3} direction={{ xs: 'column', sm: 'row' }} justifyContent="center">
      <DatePicker
        disableFuture
        label="From"
        openTo="day"
        views={['year', 'month', 'day']}
        inputFormat="yyyy/MM/dd"
        minDate={new Date('1995-06-16')}
        value={parseISO(start)}
        onChange={dateSetter(updateStart)}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        disableFuture
        label="To"
        openTo="day"
        views={['year', 'month', 'day']}
        inputFormat="yyyy/MM/dd"
        maxDate={parseISO(recent)}
        value={parseISO(end)}
        onChange={dateSetter(updateEnd)}
        renderInput={(params) => <TextField {...params} />}
      />
      <Button
        size="medium"
        variant="contained"
        color="primary"
        startIcon={<FaSistrix />}
        onClick={filter}
      >
        Filter Results
      </Button>
    </Stack>
  </LocalizationProvider>
);

CustomDatePicker.propTypes = {
  start: PropTypes.string.isRequired,
  recent: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  updateStart: PropTypes.func.isRequired,
  updateEnd: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

export default CustomDatePicker;
