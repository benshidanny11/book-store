import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import { Provider } from 'react-redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from './store/configureStore';

ReactDOM.createRoot(
  document.getElementById('root'),
)
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
reportWebVitals();
