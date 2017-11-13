import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import openSocket from 'socket.io-client';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
