import React from 'react';
import { Pagination } from 'antd';

const Paginator = ({ onClick, state }) => {
  return (
    <Pagination
      current={ state.count }
      onChange={ (e) => onClick(e) }
      total={ 50 }
    />
  )
}

export default Paginator;

