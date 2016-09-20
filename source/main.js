'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Crop from './components/crop';

require("./assets/styles/app.scss");

ReactDOM.render(
  <Crop />,
  document.getElementById('crop')
);