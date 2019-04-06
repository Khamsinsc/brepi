import React, { useEffect } from 'react';
import { Pagination } from 'antd';

const Paginator = (props) => {
  props.onClick(1);
  return (
    <Pagination
      /* current={ props.pageNumber.count } */
      onChange={ (e) => props.onClick(e) }
      total={ 90 }
    />
  )
}

export default Paginator;

