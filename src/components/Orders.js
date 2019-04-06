import React from 'react';
import { Card, Tooltip, Empty } from 'antd';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};


const Orders = ({ orders }) => {

  let orderJSX = orders.length > 0 ? orders.map(order => {
    const { id, name, tagline } = order;
    return (<Tooltip title={ tagline } key={ id }>
      <Card.Grid style={ gridStyle }>{ name }</Card.Grid>
    </Tooltip>)
  }) : <Empty />;

  return (
    <div>
      <Card title="Beer Cart">
        { orderJSX }
      </Card>
    </div>
  )

}

export default Orders;