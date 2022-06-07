import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store/configureStore';
import {Provider} from 'react-redux'


ReactDOM.createRoot(
  document.getElementById('root'),
)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
reportWebVitals();
