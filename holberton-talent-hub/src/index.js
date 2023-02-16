import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
 * This is a hack to detect when the user navigates to a new page.
 * This is needed because the router is not re-rendering when the user navigates to a new page.
 */
(() => {
  /**
   * @function pushState
   * @description This function is used to push a new state to the history this is a decorator
   *              by add own event call it routerReload
   * @param {any} ...arguments - The arguments to pass to the original function
   * @returns {any} - The return value of the original function
   */
  const oldPushState = window.history.pushState;
  window.history.pushState = function pushState() {
    const ret = oldPushState.call(this, ...arguments);
    const [data] = arguments;
    window.dispatchEvent(new CustomEvent('routerReload', { detail: data }));
    return ret;
  };

  /**
   * @function replaceState
   * @description This function is used to replace a new state to the history this is a decorator
   *             by add own event call it routerReload
   * @param {any} ...arguments - The arguments to pass to the original function
   * @returns {any} - The return value of the original function
   */
  const oldReplaceState = window.history.replaceState;
  window.history.replaceState = function replaceState() {
    const ret = oldReplaceState.call(this, ...arguments);
    const [data] = arguments;
    window.dispatchEvent(new CustomEvent('routerReload', { detail: data }));
    return ret;
  };

  /**
   * @function popstate
   * @description This is a suscription to the popstate event to detect when the user navigates to a previous page
   *             this is a decorator by add own event call it routerReload
   */
  window.addEventListener('popstate', () => {
    window.dispatchEvent(new CustomEvent('routerReload'));
  });
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
