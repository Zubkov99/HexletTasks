import fill from '../src/index.js';

test('fill', () => {
    const arr = [1, 2, 3, 4, 5, 'ha-ha']
    expect(fill([...arr], '*', 1, 3)).toStrictEqual([1, '*', '*', 4, 5, 'ha-ha']);
    expect(fill([...arr], '$')).toStrictEqual(['$', '$', '$', '$', "$", '$']);
    expect(fill([...arr], '$', 0, 10)).toStrictEqual(['$', '$', '$', '$', "$", '$']);
    expect(fill([...arr], '$', 10)).toStrictEqual(arr);
  });
  