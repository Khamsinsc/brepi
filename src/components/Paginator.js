import React, { useState, useEffect } from 'react';
import { Pagination } from 'antd';

const Paginator = () => {
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

