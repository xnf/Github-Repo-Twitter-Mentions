# Github-Repo-Twitter-Mentions

## Requirements 

- NodeJS >=v7
- Github - no requirements. Its just that due to [GitHub's rate limit](https://developer.github.com/v3/search/#rate-limit), please limit the use of application to 10 requests per minute (basically once every seconds).
- Twitter - create a dev consumer key and secred as described in [Twitter's documentation](https://developer.twitter.com/en/docs/basics/authentication/overview/application-only). once that is done, you may find your bearer token by running `npm run auth`

## Usage

```bash
    npm start [topic] [countRepos] [countTweets]
      [topic] = partial search of topics in GitHub
      [countRepos] = how many repos to output. 0<countRepos<=10
      [countTweets] = how many tweets to output. 0<countTweets<=10
```

*Example:*
```bash
    npm start angular 10
```

## Configuration

Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

`TWITTER_BEARER_TOKEN` - If the bearer token is not yet generated or has expired, it is possible to generate a new one by running `npm run auth`. Then place it in .env

`VERBOSITY_LEVEL` - default is `info`. To enable more verbose output, change to `debug`.


```
  TWITTER_CONSUMER_KEY=your_consumer_key
  TWITTER_CONSUMER_SECRET=your_secret
  TWITTER_BEARER_TOKEN=your_bearer_token_from_npm_run_auth
  VERBOSITY_LEVEL=error|info|debug
```

## Testing
Tests are run by jasmine from the `./spec` folder.

Tests with watcher do not exit for they are watching changes in src and spec folders and re-running once files change.

```bash
npm test
npm run test:watch
```

## Linting
Using ESLint package with airbnb eslint configuration.

```bash
npm run lint
```
