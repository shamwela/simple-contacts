import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faWindowClose,
  faUser,
  faEnvelope,
  faPhone,
  faExclamationTriangle,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App.jsx';

library.add(
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faWindowClose,
  faUser,
  faEnvelope,
  faPhone,
  faExclamationTriangle,
  faSave
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);