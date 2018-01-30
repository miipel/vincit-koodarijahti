import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://' + window.location.hostname + ':8081';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
