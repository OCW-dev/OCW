import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container'>
      <span className='receiving-address'>Receiving address</span>
      <span className='wallet-name'>Enter wallet name or Ens domain name </span>
      <button className='rectangle'>
        <span className='paste'>Paste</span>
        <div className='vector' />
      </button>
      <div className='line' />
      <div className='group' />
      <div className='arrow' />
    </div>
  );
}
