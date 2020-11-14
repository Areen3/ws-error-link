import { genLib } from './gen-lib';

describe('genLib', () => {
  it('should work', () => {
    expect(genLib()).toEqual('gen-lib');
  });
});
