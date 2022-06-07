import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(
  document.getElementById('root'),
)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
reportWebVitals();
