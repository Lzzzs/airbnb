import React from 'react';

const home = React.lazy(() => import('@/views/home'));
const about = React.lazy(() => import('@/views/about'));
const more = React.lazy(() => import('@/views/more'));

const routes = [
  {
    path: '/',
    element: <home />,
  },
  {
    path: '/home',
    element: <home />,
  },
  {
    path: '/about',
    element: <about />,
  },
  {
    path: '/more',
    element: <more />,
  },
];

export default routes;
