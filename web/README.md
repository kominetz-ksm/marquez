# Marquez Web UI

## Requirements

* To develop this project locally, use the same version of Node as the base image in the docker file (Node 22.17.0 as of 2025-06-27). The Marquez developers recommended only using Node version 18; testing with newer versions passed, so the KSM target is to keep the project up-to-date with the latest LTS Node release. Make sure to retest after any Node version change.

* In order to easily switch between node versions, use the [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md) node version manager.

## Development

1. Install dependencies:

   ```
   npm install
   ```

1. Run webpack (with development server):

   ```
   npm run dev
   ```

### Notes

The webui can run without the other components, so it's not strictly necessary to run the back end first or at all. The local webui runs on a different port, so it's fine to run the full back end via `up.sh` to have the docker webui instance on port 3000 and the local instance on port 1337.    

Marquez listens on port `8080` for all API calls; use the `MARQUEZ_PORT` environment variable to  override the API port.

> I think this only applies to running the API locally. Docker API uses port 5000. Need to confirm. -- jkominetz, 2025-06-27

## Testing

1. Run tests in watch mode:

   ```
   npm run test-watch
   ```

1. Run all tests:

   ```
   npm run test
   ```

## Testing Setup

- [Jest](https://jestjs.io/en/) is our testing framework. It is the test runner; it provides testing language (describe, it, beforeEach), mocking, snapshot, code coverage.
- [test-labrary](https://testing-library.com/)
- run tests by doing `npm run test`
- config files:
  - jest.config.js
- For testing Redux Sagas, we are using `Redux Saga Test Plan`. This library gives us both unit testing and integration test functionality. Check out the [docs](http://redux-saga-test-plan.jeremyfairbank.com/).

## Typescript

This project is written in typescript. See [tsconfig.json](tsconfig.json) for our setup.

Our types are defined in the `src/types` folder

### Linting & Prettifying

Fix all style issues in project

```
npm run eslint-fix
```

Note that linting is part of the test suite and may require fixing some lint issues (like CRLF) before the tests will PASS.

## Seeding data

Mock data can be found in the `docker/db/data` folder.
Feel free to edit the mock data if you like. (Grant worked really hard on making it pretty.)
