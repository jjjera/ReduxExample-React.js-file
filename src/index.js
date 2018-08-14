import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reduserList from './reducers';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';

const storeCreation = createStore(reduserList);
console.log('storeCreation', storeCreation);

ReactDOM.render(<div>Hello</div>, document.getElementById('root'));
registerServiceWorker();
