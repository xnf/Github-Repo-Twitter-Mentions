const nock = require('nock');
const service = require('../src/github.service');

describe('GitHub Service', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .get('/search/repositories?q=topic:foo&per_page=10')
            .reply(200, {items: new Array(10).fill(null)});
        nock('https://api.github.com')
            .get('/search/repositories?q=topic:foo&per_page=3')
            .reply(200, {items: new Array(3).fill(null)});
    });
    it('Should return 10 items by default from the github api', async () => {
        const response = await service.findReposByTopic('foo');
        expect(response.length).toBe(10);
    });
    it('Should return 3 items by limit from the github api', async () => {
        const response = await service.findReposByTopic('foo');
        expect(response.length).toBe(3);
    });

});
