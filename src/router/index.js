import React from 'react';

const Home = React.lazy(() => import('@/views/home'));
const About = React.lazy(() => import('@/views/about'));
const More = React.lazy(() => import('@/views/more'));

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/more',
    element: <More />,
  },
];

export default routes;
