import React from 'react';
import { Card, Button, Tooltip } from 'antd';

const { Meta } = Card;

const BeerDisplay = ({ beers, onClick }) => {

  let beerCards = beers.beers.map(beer => {
    let { id, image_url, name, description } = beer !== undefined && beer;
    return (
      <Card
        key={ id }
        style={ { height: '350px', width: '300px', margin: '10px' } }
        cover={
          <Tooltip title={ description }>
            <div className='beerimg'>
              <img alt="example" src={ image_url } />
            </div>
          </Tooltip>
        }

        actions={ [<Tooltip title="Order"><Button value={ id } icon="shopping" onClick={ (e) => {
          e.persist();
          onClick(e.target.value);
        } }>
          Order Beer
      </Button></Tooltip>] }
      >
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




