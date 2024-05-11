// importing from react
import React from 'react';
import ReactDOM from 'react-dom/client';
// importing style
import "./style/style.css";
// importing App
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
