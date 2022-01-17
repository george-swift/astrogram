import format from 'date-fns/format';

export const formatGallery = (data) => {
  const relevantKeys = ['date', 'url', 'title'];
  const onlyImages = data.filter(({ media_type: type }) => type === 'image');
  const gallery = JSON.stringify(onlyImages, relevantKeys);
  return JSON.parse(gallery);
};

export const shortISO = (date) => format(date, 'yyyy-MM-dd');

export const getMonth = () => {
  const today = new Date();
  const timestamp = new Date().setDate(today.getDate() - 30);
  const dateLastMonth = shortISO(new Date(timestamp));

  return {
    dateLastMonth,
    dateToday: shortISO(today),
  };
};

export const dateSetter = (setter) => (date) => setter(shortISO(new Date(date)));
