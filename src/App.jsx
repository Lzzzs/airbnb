import React, { memo } from 'react';
import routes from '@/router/index';
import { useRoutes } from 'react-router-dom';

const App = memo(() => {
  return (
    <div className="app">
      <div>header</div>
      <div className="content">{useRoutes(routes)}</div>
      <div>footer</div>
    </div>
  );
});

export default App;
