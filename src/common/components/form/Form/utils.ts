import deepmerge from 'deepmerge';
import clone from 'lodash/clone';
import toPath from 'lodash/toPath';
import { isObject, isInteger } from 'common/utils/is';

export const getActiveElement = (doc?: Document): Element | null => {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
};

export const getIn = (
  obj: any,
  key: string | string[],
  def?: any,
  p: number = 0
) => {
  const path = toPath(key);
  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }
  return obj === undefined ? def : obj;
};

export const setIn = (obj: any, path: string, value: any): any => {
  const res: any = clone(obj);
  let resVal: any = res;
  let i = 0;
  const pathArray = toPath(path);

  for (; i < pathArray.length - 1; i++) {
    const currentPath: string = pathArray[i];
    const currentObj: any = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = clone(currentObj);
    } else {
      const nextPath: string = pathArray[i + 1];
      resVal = resVal[currentPath] =
        isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  }

  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  }

  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
};

export const setNestedObjectValues = <T>(
  object: any,
  value: any,
  visited: any = new WeakMap(),
  response: any = {}
): T => {
  for (const k of Object.keys(object)) {
    const val = object[k];
    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
};

/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */
export const arrayMerge = (target: any[], source: any[], options: any): any[] => {
  const destination = target.slice();

  source.forEach((e: any, i: number) => {
    if (typeof destination[i] === 'undefined') {
      const cloneRequested = options.clone !== false;
      const shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone
        ? deepmerge<any>(Array.isArray(e) ? [] : {}, e, options)
        : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = deepmerge(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
};
