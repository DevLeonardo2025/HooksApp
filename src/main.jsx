import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HooksApp } from './HooksApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />
  </StrictMode>,
)
