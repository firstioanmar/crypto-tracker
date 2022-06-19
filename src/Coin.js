import React from 'react';
import NumberFormat from 'react-number-format';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>
            <NumberFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
          </p>
          <p className='coin-volume'>
            <NumberFormat value={volume} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
          </p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Market Cap: <NumberFormat value={marketcap} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;