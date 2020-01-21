import React from 'react';
import { render } from 'react-dom';

import App from 'app';

const root = document.getElementById('root');

const renderApp = () => {
  render(
		<App />,
    root
  );
};

renderApp();