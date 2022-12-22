import React, { memo } from 'react';
import routes from '@/router/index';
import { useRoutes } from 'react-router-dom';

import Header from 'components/header';
import Footer from 'components/footer';

const index = memo(() => {
  return (
    <div>
      <Header />
      <div className="content">{useRoutes(routes)}</div>
      <Footer />
    </div>
  );
});

export default index;
