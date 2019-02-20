import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'normalize.css'
import './styles/main.scss';

import App from './App/App';
import * as serviceWorker from './serviceWorker';

const root = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();