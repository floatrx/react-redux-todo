import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './App';
import { Notification } from './components/Notifications';


ReactDOM.render(
    <>
        <Notification />
        <App title="React ToDo" />
    </>,
    document.getElementById('root')
);