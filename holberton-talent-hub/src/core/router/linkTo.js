import { LocalStorageKeys } from '../constants';

/**
 * @function linkToInAnchor
 * @description This function is used to link to a page without reloading the page
 * @param {{pathname, ...props}} pathname - The pathname to link to and the props to pass to the history state
 * @returns
 */
export const linkTo = ({ pathname, ...props } = {}) => {
  if (!pathname) throw new Error('The pathname is required');
  if (typeof pathname !== 'string') throw new Error('The pathname must be a string');
  if (pathname.length === 0) throw new Error('The pathname must not be empty');
  if (pathname[0] !== '/') throw new Error('The pathname must start with a /');
  localStorage.setItem(LocalStorageKeys.pathname, pathname);
  window.history.pushState({ ...props }, '', pathname);
};

/**
 * @function linkToInAnchor
 * @description This function is used to link to a page in an anchor tag without reloading the page
 * @param {{pathname, ...props}} pathname - The pathname to link to and the props to pass to the history state
 * @returns
 */

export const linkToInAnchor = ({ ...props } = {}) =>
  function (e) {
    e.preventDefault();
    const pathname = e.target.getAttribute('href');
    linkTo({ pathname, ...props });
  };
