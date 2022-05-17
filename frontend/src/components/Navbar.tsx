import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
<nav>
  {/* logo */}
  <div>
    <h2>Mern ASD</h2>
  </div>

  {/* links */}
  <ul>
    <li>
      <Link to='/cart'>
      
      </Link>
    </li>
  </ul>
</nav>
  );
}

export default Navbar;
