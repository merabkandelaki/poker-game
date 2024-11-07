import React from 'react';
import '../styles/Loader.less';

const Loader = ({ progress }) => (
  <div className="loader-wrapper">
    <div className="loader">
      <div className="loader-bar" style={{ width: `${progress}%` }}></div>
    </div>
    <span>Loading: 70%</span>
  </div>
);

export default Loader;
