import format from 'date-fns/format';

export const formatGallery = (data) => {
  const relevantKeys = ['date', 'url', 'title'];
  const onlyImages = data.filter(({ media_type: type }) => type === 'image');
  const gallery = JSON.stringify(onlyImages, relevantKeys);
  return JSON.parse(gallery);
};

export const shortISO = (date) => format(date, 'yyyy-MM-dd');

export const getMonth = () => {
  const prevMonth = new Date().setDate(new Date().getDate() - 30);
  const start = shortISO(new Date(prevMonth));

  const current = new Date().setDate(new Date().getDate() - 1);
  const end = shortISO(new Date(current));

  return { start, end };
};

export const dateSetter = (setter) => (date) => setter(shortISO(new Date(date)));
