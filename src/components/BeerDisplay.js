import React, { useEffect } from 'react';
import { Card, Button, Tooltip } from 'antd';

const { Meta } = Card;
const cardStyle = { height: '358px', width: '300px', margin: '10px' }

const BeerDisplay = ({ beers, onClick, onMount }) => {

  useEffect(() => onMount(['beers']), []);

  let beerCards = beers.beers.map(beer => {
    const { id, image_url, name, description } = beer !== undefined && beer;

    const coverJSX =
      <Tooltip title={ description }>
        <div className='beerimg'>
          <img alt="example" src={ image_url } />
        </div>
      </Tooltip>;

    const handleClick = (e) => {
      e.persist();
      onClick(e.target.value);
    }

    return (
      <Card
        key={ id }
        style={ cardStyle }
        cover={ coverJSX }
        actions={ [
          <Tooltip title="Order">
            <Button value={ id } icon="shopping" onClick={ handleClick }>
              Order Beer
            </Button>
          </Tooltip>
        ] }>
        <Meta title={ name } />
      </Card>
    )
  })

  return (
    <div className='beerContainer'>
      { beerCards }
    </div>
  )
}

export default BeerDisplay;




