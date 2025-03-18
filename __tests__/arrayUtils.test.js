import { removeDuplicates, sortNumbers, sumPositiveNumbers, groupByParity, findCommonElements } from '../arrayUtils.js';
import fc from 'fast-check';

describe('Array utility functions', () => {
  
  test('removeDuplicates должно удалить повторяющиеся значения из массива', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = removeDuplicates(arr);
        return result.length <= arr.length && result.every((item, index) => result.indexOf(item) === index);
      })
    );
  });

  test('sortNumbers должна приводить к сортировке массива чисел в порядке возрастания', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = sortNumbers(arr);
        return result.every((num, index) => index === 0 || num >= result[index - 1]);
      })
    );
  });

  test('sumPositiveNumbers должна суммировать положительные числа в массиве', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = sumPositiveNumbers(arr);
        return result >= 0 && result === arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
      })
    );
  });

  test('groupByParity должна группировать по четности', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), (arr) => {
        const result = groupByParity(arr);
        return result.even.every(num => num % 2 === 0) && result.odd.every(num => num % 2 !== 0);
      })
    );
  });

  test('findCommonElements должна возвращать общие элементы между двумя массивами', () => {
    fc.assert(
      fc.property(fc.array(fc.integer()), fc.array(fc.integer()), (arr1, arr2) => {
        const result = findCommonElements(arr1, arr2);
        return result.every(item => arr1.includes(item) && arr2.includes(item));
      })
    );
  });
});