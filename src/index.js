import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reduserList from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const storeCreation = createStore(reduserList);
console.log('storeCreation', storeCreation);

ReactDOM.render(
  <Provider store={storeCreation}>
    <App />
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
