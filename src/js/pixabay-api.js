import axios from 'axios';

export const getImagesByQuery = query => {
  const params = {
    key: '55427334-75cc24dd7c9d859437f7d1aed',
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get('https://pixabay.com/api/', { params })
    .then(response => response.data);
};
