import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ now that App has default export
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* App handles routing */}
  </React.StrictMode>
);
