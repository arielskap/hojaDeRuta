import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const LinkMenu = ({ to, children }) => {
  const { url } = useRouteMatch();
  return (
    <Link className='text-menu-hr border border-hr rounded px-2 my-1 transform duration-150 hover:scale-110' to={`${url}/${to}`}>
      {children}
    </Link>
  );
};

export default LinkMenu;
