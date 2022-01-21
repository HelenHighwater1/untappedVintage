import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = () => (
    // <Provider store={store}> ALSO ADD STORE AS A PROP TO ROOT !
        <HashRouter>
            <App />
        </HashRouter>
    // </Provider>
);

export default Root;