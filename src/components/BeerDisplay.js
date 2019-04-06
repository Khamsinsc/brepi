import React, { useEffect } from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const BeerDisplay = ({ beers }) => {
  console.log(beers, 'display');

  const { image_url, name, discription } = beers.beers[0] !== undefined && beers.beers[0];


  return (
    <Card
      style={ {
        width: 300,
      } }
      cover={ <img alt="example" src={ image_url } /> }
      actions={ [<Icon type="shopping" />] }
    >
      <Meta

        title={ name }
        description={ discription }
      />
    </Card>
  )
}

export default BeerDisplay;

