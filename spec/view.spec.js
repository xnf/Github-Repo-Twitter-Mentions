const view = require('../src/view');
const logger = require('../src/logger');

describe('View', () => {
  beforeEach(() => {
    spyOn(logger, 'info');
  });
  it('should tell that repo has no tweets', () => {
    view.renderTweets([]);
    expect(logger.info)
      .toHaveBeenCalledWith('\t\tNobody talks about this repo');
  });
  it('should render list of tweets', () => {
    view.renderTweets([{
      user: { screen_name: 'A' },
      text: 'B',
    }]);
    expect(logger.info)
      .toHaveBeenCalledWith('\t\t@A: B');
  });
});
