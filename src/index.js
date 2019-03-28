import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'normalize.css'
import './styles/main.scss';

import App from './containers/App/App';
import { toggleSidebarLeft } from './reducers/sidebarLeftReducer';
import * as serviceWorker from './serviceWorker';

// Atm there's only one reducer, but later on this will be changed to a rootReducer.
const store = createStore(toggleSidebarLeft);

const root = (
    <Provider store={ store }>
        <App/>
    </Provider>
);

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
