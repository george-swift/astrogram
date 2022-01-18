import { useState } from 'react';
import { useQuery } from 'react-query';
import FlipMove from 'react-flip-move';
import Img from 'react-cool-img';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import fetchGallery from '../api';
import { getMonth } from '../utils';
import CustomDatePicker from './CustomDatePicker';
import LikeButton from './LikeButton';
import Spinner from './Spinner';
import BasicAlert from './BasicAlert';

const Gallery = () => {
  const { start: thirtyDaysAgo, end: yesterday } = getMonth();
  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(yesterday);

  const [page, setPage] = useState(1);
  const [maxPerPage] = useState(12);

  const {
    data, isLoading, error, refetch, isRefetching,
  } = useQuery(
    'astroImages',
    () => fetchGallery(startDate, endDate),
    { refetchOnWindowFocus: false },
  );

  const gallery = data?.slice((page - 1) * maxPerPage, page * maxPerPage);
  const count = Math.ceil((data?.length ?? 12) / maxPerPage);

  const paginate = (_, value) => setPage(value);

  const filterSearch = () => {
    refetch();
    setPage(1);
  };

  if (isLoading) return <Spinner wUnit="vw" hUnit="vh" />;

  if (error) return <BasicAlert message={error.message} />;

  return (
    <main className="gallery">
      <CustomDatePicker
        start={startDate}
        updateStart={setStartDate}
        end={endDate}
        updateEnd={setEndDate}
        recent={yesterday}
        filter={filterSearch}
      />

      {isRefetching ? <Spinner wUnit="%" hUnit="%" /> : (
        <>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Pagination page={page} count={count} onChange={paginate} />
          </Stack>

          <FlipMove typeName="ul" className="cardContainer">
            {gallery.map(({ date, url, title }) => (
              <li key={url} className="card">
                <Img src={url} className="card__image" alt={title} />
                <div className="card__body">
                  <h2 className="card__title">{title}</h2>
                  <small className="card__date">
                    📸 &nbsp;
                    {date}
                  </small>
                  <LikeButton />
                </div>
              </li>
            ))}
          </FlipMove>

          <Stack spacing={2} direction="row" justifyContent="center">
            <Pagination page={page} count={count} onChange={paginate} />
          </Stack>
        </>
      )}
    </main>
  );
};

export default Gallery;
