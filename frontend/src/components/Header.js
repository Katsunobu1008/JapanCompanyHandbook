import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#fff',
  padding: '10px 20px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  textDecoration: 'none',
  color: '#333',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>
        四季報データベース
      </Link>
    </header>
  );
};

export default Header;
