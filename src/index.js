import * as React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('#root'));
registerServiceWorker();
