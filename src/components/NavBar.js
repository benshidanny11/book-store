import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { id: 1, title: 'BOOKS', path: '/' },
    { id: 2, title: 'CATEGORIES', path: '/categories' },
  ];
  return (
    <nav className="nav">
      <ul className="nav-links">
        <h1>
          <NavLink to="/" className="nav-links-item">BookStore CMS</NavLink>
        </h1>
        <div>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className="active-link">
                {link.title}
              </NavLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
