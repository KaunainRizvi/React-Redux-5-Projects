import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          
        </Link>
        <span className="text-muted">© 2021 DailyFoodie, Inc</span>
      </div>

      
    </div>
  );
}

export default Footer;
