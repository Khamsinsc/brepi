import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import axios from 'axios';

const Paginator = () => {

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(console.log);
  }, []);

  const [page, setPage] = useState(1);
  const handleChange = (e) => {
    setPage(e);
  }

  return (
    <Pagination
      current={ page }
      onChange={ handleChange }
      total={ 50 }
    />
  )
}

export default Paginator;

