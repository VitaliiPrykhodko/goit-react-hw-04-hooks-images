import axios from 'axios';

const key = '23495092-fcdd3993ee353ca97f61af1fc';

const fetchApi = (query = '', page = 1 ) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits.map(elem=>elem));
    
};

export  {fetchApi};