import * as React from 'react';

export const isEmptyArray = (value?: any) =>
  Array.isArray(value) && value.length === 0;

export const isFunction = (obj: any): obj is Function => typeof obj === 'function';

export const isObject = (obj: any): obj is Object =>
  obj !== null && typeof obj === 'object';

export const isInteger = (obj: any): boolean =>
  String(Math.floor(Number(obj))) === obj;

export const isString = (obj: any): obj is string =>
  Object.prototype.toString.call(obj) === '[object String]';

/* eslint-disable-next-line no-self-compare */
export const isNaN = (obj: any): boolean => obj !== obj;

export const isEmptyChildren = (children: any): boolean =>
  React.Children.count(children) === 0;

export const isPromise = (value: any): value is PromiseLike<any> =>
  isObject(value) && isFunction(value.then);

export const isInputEvent = (value: any): value is React.SyntheticEvent<any> =>
  value && isObject(value) && isObject(value.target);
