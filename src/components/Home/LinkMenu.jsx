import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const LinkMenu = ({ to, children }) => {
  const { url } = useRouteMatch();
  return (
    <Link className=' text-center w-full my-3 shadow-lg bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded max-w-sm transform duration-150 hover:scale-105' to={`${url}/${to}`}>
      {children}
    </Link>
  );
};

export default LinkMenu;
