import React from 'react';
import { Pagination } from 'antd';

const Paginator = (props) => {
  props.onClick(1);
  return (
    <div className='paginator'>
      <Pagination
        onChange={ (e) => props.onClick(e) }
        total={ 90 }
      />
    </div>
  )
}

export default Paginator;
