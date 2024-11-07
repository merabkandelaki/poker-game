import React from 'react';
import '../styles/Spinner.less';
import img from '../assets/images/spiner.svg';

const Spinner = () => (
  <div className="spinner">
    <div className="spinner-circle">
      <img src={img} alt="spinner" />
    </div>
  </div>
);

export default Spinner;
