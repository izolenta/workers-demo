/* eslint-disable */

import {fibonacci} from './fibo';

self.onmessage = (message) => {
  console.log('got message')
  const data = message.data;
  const fib = fibonacci(data);
  console.log('got fibo')
  postMessage(fib);
};

export {}
