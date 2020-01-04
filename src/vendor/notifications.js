// Documentation of "react-notifications-component"
// Here: https://www.npmjs.com/package/react-notifications-component

import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const defaults = {
  title: '',
  message: '',
  type: 'info',
  insert: 'bottom',
  container: 'top-right',
  animationIn: ['notifyShow'],
  animationOut: ['notifyHide'],
  // width: 200,
  dismiss: {
    duration: 3000,
    onScreen: true,
    pauseOnHover: true,
  },
  touchSlidingExit: {
    swipe: {
      duration: 1000,
      timingFunction: 'ease-out',
      delay: 0,
    },
    fade: {
      duration: 1000,
      timingFunction: 'ease-out',
      delay: 0,
    },
  },
};

const notify = (function() {
  const show = (options) => {
    store.addNotification({
      ...defaults,
      ...options,
    });
  };

  const success = (options) => {
    store.addNotification({
      ...defaults,
      ...options,
      type: 'success',
    });
  };
  const error = (options) => {
    store.addNotification({
      ...defaults,
      ...options,
      type: 'danger',
    });
  };
  const warning = (options) => {
    store.addNotification({
      ...defaults,
      ...options,
      type: 'warning',
    });
  };

  return {
    show,
    success,
    error,
    warning,
  };
})();

export { ReactNotification as Notification, notify };
