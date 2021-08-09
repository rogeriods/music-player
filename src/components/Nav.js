import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  // Handlers
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>Planet Zoom</h1>
      <button className={libraryStatus ? 'library-active' : ''} onClick={openLibraryHandler}>
        Library <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
