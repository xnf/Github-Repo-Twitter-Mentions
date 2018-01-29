const init = require('../src/init');

describe('Init', () => {
  describe('countRepos', () => {
    it('should return countRepos as 10 when it is undefined', () => {
      expect(init(['foo']).countRepos)
        .toBe(10);
    });
    it('should return countRepos as 10 when it is zero', () => {
      expect(init(['foo', 0]).countRepos)
        .toBe(10);
    });
    it('should return countRepos as 5 when it is 5', () => {
      expect(init(['foo', 5]).countRepos)
        .toBe(5);
    });
    it('should return countRepos as 10 when it is more than 10', () => {
      expect(init(['foo', 15]).countRepos)
        .toBe(10);
    });
  });

  describe('countTweets', () => {
    it('should return countTweets as 10 when it is undefined', () => {
      expect(init(['foo', 1]).countTweets)
        .toBe(10);
    });
    it('should return countTweets as 10 when it is zero', () => {
      expect(init(['foo', 1, 0]).countTweets)
        .toBe(10);
    });
    it('should return countTweets as 5 when it is 5', () => {
      expect(init(['foo', 1, 5]).countTweets)
        .toBe(5);
    });
    it('should return countTweets as 10 when it is more than 10', () => {
      expect(init(['foo', 1, 15]).countTweets)
        .toBe(10);
    });
  });

  describe('topic', () => {
    it('should return topic from first argument', () => {
      expect(init(['foo']).topic)
        .toBe('foo');
    });
    xit('should exit with usage info when topic is not passed', () => {
      expect(init(['foo']).topic)
        .toBe('foo');
    });
  });
});
