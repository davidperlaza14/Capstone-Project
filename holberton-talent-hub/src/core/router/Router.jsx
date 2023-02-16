import { useState } from 'react';
import { LocalStorageKeys } from '../constants';

export const Router = ({ routes }) => {
  const pathname = localStorage.getItem(LocalStorageKeys.pathname);
  const [currentRoute, setCurrentRoute] = useState(pathname);
  const [props, setProps] = useState(pathname);

  /**
   * Listen to the routerReload event and update the current route and props
   * with the new values from the event detail object
   */
  window.addEventListener('routerReload', (e) => {
    const pathname = localStorage.getItem(LocalStorageKeys.pathname);
    setProps({ ...e.detail });
    setCurrentRoute(pathname);
  });

  /**
   * Find the route that matches the current route and render the component with the props
   */
  const { component: Component } = [...routes].find(({ path }) => {
    console.log(path, currentRoute, path.test(currentRoute));
    return path.test(currentRoute)
  });
  return <Component {...props} />;
};
