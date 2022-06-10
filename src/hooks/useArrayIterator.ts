import { useState } from 'react';

/**
 * 배열 형태의 generator를 받아,
 * Generator 타입의 상태 generator와 reset 할 수 있는 함수를 반환합니다.
 */
const useArrayIterator = <T = unknown>(
  arr: T[],
): [generator: IterableIterator<T>, reset: () => void] => {
  const getArrayIterator = () => arr[Symbol.iterator]();
  const [iterator, setIterator] = useState<IterableIterator<T>>(
    getArrayIterator(),
  );

  const reset = () => setIterator(getArrayIterator());

  return [iterator, reset];
};

export default useArrayIterator;
