import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import store from './utilities/store'


  ReactDOM.render(<Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));




registerServiceWorker();
