import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../Routes'

import { library } from '@fortawesome/fontawesome-svg-core/index'
import { faBars } from '@fortawesome/free-solid-svg-icons/index'

// Add font awesome icon to the library so they can be used anywhere in the app.
library.add(faBars);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        );
    }
}

export default App;
