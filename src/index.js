import react from 'react';
import { Provider } from 'redux';
import { configureStore } from './store';
import { render } from 'react-dom-render';
import App from './containers/index.js';

render(
    <Provider store={configureStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
)