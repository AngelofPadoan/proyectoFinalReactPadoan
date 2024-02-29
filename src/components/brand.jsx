import React from 'react';
import { Link } from 'react-router-dom'; 

const Brand = () => {
  return (
    <Link to="/" className="navbar-brand">
      <img src="https://tse4.mm.bing.net/th?id=OIP.WRGrFk2C4QCNAmdD9iJOvwHaEK&pid=Api&P=0&h=180" alt="Logo" width="250" height="80" />
    </Link>
  );
};

export default Brand;

