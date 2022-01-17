import { useState } from 'react';
import { useQuery } from 'react-query';
import FlipMove from 'react-flip-move';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import fetchGallery from '../api';
import { getMonth } from '../utils';
import CustomDatePicker from './CustomDatePicker';
import LikeButton from './LikeButton';
import Spinner from './Spinner';
import BasicAlert from './BasicAlert';

const Gallery = () => {
  const { dateLastMonth, dateToday } = getMonth();
  const [startDate, setStartDate] = useState(dateLastMonth);
  const [endDate, setEndDate] = useState(dateToday);

  const [page, setPage] = useState(1);
  const [maxPerPage] = useState(12);

  const {
    data, isLoading, error, refetch,
  } = useQuery(
    'astroImages',
    () => fetchGallery(startDate, endDate),
    { refetchOnWindowFocus: false },
  );

  const gallery = data?.slice((page - 1) * maxPerPage, page * maxPerPage);
  const count = Math.ceil((data?.length ?? 12) / maxPerPage);

  const paginate = (_, value) => setPage(value);

  const filterSearch = () => refetch();

  if (isLoading) return <Spinner />;

  if (error) return <BasicAlert message={error.message} />;

  return (
    <section className="gallery">
      <h1>Astronomy Photo Gallery</h1>

      <CustomDatePicker
        start={startDate}
        updateStart={setStartDate}
        end={endDate}
        updateEnd={setEndDate}
        today={dateToday}
        filter={filterSearch}
      />

      <FlipMove typeName="ul" className="cardContainer">
        {gallery.map(({ date, url, title }) => (
          <li key={url} className="card">
            <img src={url} className="card__image" alt={title} />
            <div className="card__body">
              <h2 className="card__title">{title}</h2>
              <small className="card__date">{date}</small>
              <LikeButton />
            </div>
          </li>
        ))}
      </FlipMove>

      <Stack spacing={2} justifyContent="flex-end">
        <Pagination page={page} count={count} onChange={paginate} />
      </Stack>
    </section>
  );
};

export default Gallery;