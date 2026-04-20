import axios from 'axios';

export const getImagesByQuery = async (query, page = 1) => {
  const params = {
    key: '55427334-75cc24dd7c9d859437f7d1aed',
    q: query.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 15,
  };

  const response = await axios.get('https://pixabay.com/api/', { params });

  return response.data;
};