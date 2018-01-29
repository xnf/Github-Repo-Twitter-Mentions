const init = require('../src/init');

describe('Init', () => {
  describe('count', () => {
    it('should return count as 10 when it is undefined', () => {
      expect(init(['foo']).count)
        .toBe(10);
    });
    it('should return count as 10 when it is zero', () => {
      expect(init(['foo', 0]).count)
        .toBe(10);
    });
    it('should return count as 5 when it is 5', () => {
      expect(init(['foo', 5]).count)
        .toBe(5);
    });
    it('should return count as 10 when it is more than 10', () => {
      expect(init(['foo', 15]).count)
        .toBe(10);
    });
  });
});
