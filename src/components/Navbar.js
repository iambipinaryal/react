import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <div className="navbar-nav me-auto">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
          <a className="nav-link" href="/">About</a>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">Enter</button>
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string,
  Search: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Set title here',
  about:'About Here',
  Search: 'Search',
};
