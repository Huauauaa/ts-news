import { strictEqual } from 'assert';
import { add } from '../src/add';

describe('add', function () {
  it('1 + 2 should return 3', function () {
    strictEqual(add(1, 2), 3);
  });
});
