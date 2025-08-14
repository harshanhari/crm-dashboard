import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
