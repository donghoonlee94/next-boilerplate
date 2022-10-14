import _get from 'lodash/get';
import _padStart from 'lodash/padStart';

/**
 * async await에서 then catch를 통해 에러 처리를 할 수 있게 제작된 함수.
 * asynchronous promise then catch = aptc
 * @function
 * @param {Function} promisifiedFunc
 * @param {Array} arg
 * @return {Promise<{error: any, errorCode: string, result: null}|{error: null, errorCode: '', result: any}>}
 * @example
 * await aptc(promiseFunc, arg1, arg2)
 */

// export function aptc(promisifiedFunc, ...arg) {
//   return new Promise((resolve, reject) => {
//     promisifiedFunc(...arg)
//       .then((res) => {
//         resolve({
//           errorCode: res.code || null,
//           errorMsg: res.message,
//           result: res.data,
//           isError: parseInt(res.code) !== 0,
//         });
//       })
//       .catch((error) => {
//         console.error('API Error => ', error);
//         // catch로 잡힐 경우 오류 처리해줄 수 있도록 resolve에서 isError true 설정
//         resolve({ error, isError: true });
//       });
//   });
// }

/**
 * @function makeQuery
 * @param {Object} jsonQuery
 * @return {String}
 * @example
 * const query = makeQuery({ abc: 123, def: 456 });
 * query === `abc=123&def=456`
 */

export const makeQuery = (jsonQuery: { [key: string]: any }) => {
  const URI = encodeURIComponent;
  return Object.entries(jsonQuery)
    .map(([key, value]) => `${URI(key)}=${URI(value)}`)
    .join('&');
};

export const joinUrl = (paths: (string | number)[] | string, params?: unknown): string => {
  const joinedPath = Array.isArray(paths) ? paths.join('/') : paths;
  if (params) return `${joinedPath}?${params}`;
  return joinedPath;
};

export const removeString = (string: string, removeValue: string): string => {
  const regex = new RegExp(`\\${removeValue}`, 'g');
  return string.replace(regex, '');
};

export const replaceBrTag = (msg: string): string => {
  return msg?.replace(/(?:\r\n|\r|\\n|\n)/g, '<br />') ?? '';
};

// export const getExtensionOfFileName = (filename) => {
//   const length = filename.length;
//   const lastDot = filename.lastIndexOf('.');
//   const ext = filename.substring(lastDot, length);
//   return ext;
// };

// export const isExtensionPdfFile = (fileUrl) => {
//   return /\.(pdf)$/i.test(fileUrl);
// };
