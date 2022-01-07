import 'jest';
import { random, shuffle } from './utils';
import { draw } from './utils';

const randomArray = (length: number = 10) =>
  new Array(length).fill(0).map(_ => random(10));

describe('Test shuffle', () => {
  it('should be work (0 element)', async () => {
    const target: any[] = [];

    expect(shuffle(target)).toEqual([]);
  });

  it('should be same (1 element)', async () => {
    const target = randomArray(1);

    expect(shuffle(target)).toEqual(target);
  });

  it('should be different (n elements)', async () => {
    const target = randomArray();
    const result = [...target];
    shuffle(result);

    let notContain = 0;

    // 포함하는 elements 들은 모두 같아야 함
    target.forEach(v =>
      result.includes(v) ? (result[result.indexOf(v)] = -1) : notContain++,
    );

    expect(result).not.toEqual(target);
    expect(notContain).toEqual(0);
  });
});

describe('Test draw', () => {
  it('should return length of array (n is more than length)', async () => {
    const arr = randomArray();
    const num = arr.length + 1;

    expect(draw(arr, num)).toHaveLength(arr.length);
  });

  it('should be work (draw 1 element)', async () => {
    const arr = randomArray();
    const num = random(arr.length);

    expect(draw(arr, num)).toHaveLength(num);
  });

  it('should be work (draw n element)', async () => {
    const arr = randomArray();
    const num = random(arr.length);

    expect(draw(arr, num)).toHaveLength(num);
  });
});
