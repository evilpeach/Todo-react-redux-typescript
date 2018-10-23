import React from 'react';
import { Provider } from 'react-redux'
import store from '../store/index';
import { render } from 'react-dom';
import { saveState } from './localStorage';
import App from './components/App';

store.subscribe(() => {
    saveState(store.getState());
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
