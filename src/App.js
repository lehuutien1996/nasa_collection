import React from 'react';
import AppRouter from './routes';

import Context from 'context';

import 'styles/index.scss';

const App = () => {
  return (
    <Context>
      <AppRouter/>
    </Context>
  );
}

export default App;
