import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {UseFetchProvider} from './hooks'
import App from './App';


ReactDOM.render(
<UseFetchProvider url="https://api.github.com/repos/facebook/react/issues">
    <App />
</UseFetchProvider>, document.getElementById('root'));

