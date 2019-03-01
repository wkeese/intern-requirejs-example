# Intern 4 / RequireJS example

This is a test / example of using Intern 4 in conjunction
with RequireJS, to run unit tests and functional tests.

## Setup

Load dependencies:

```
$ npm install
```

Also, install `chromedriver` (http://chromedriver.chromium.org/downloads).

## Running locally (from Node)

Run:

```
$ npx intern
```

It doesn't seem necessary to manually start selenium / chromedriver anymore.

## Running against BrowserStack

Set up a BrowserStack account and register user/password as
explained in https://theintern.io/docs.html#Intern/4/docs/docs%2Frunning.md/cloud-service.

```
$ npx intern config=@browserstack
```

## Running against SauceLabs

Set up a SauceLabs account and register user/password as
explained in https://theintern.io/docs.html#Intern/4/docs/docs%2Frunning.md/cloud-service.

```
$ npx intern config=@sauce
```

Note: IE11 not working, is it supposed to?

## Running from browser

Start local HTTP server:

```
$ http-server
```

Then in browser, navigate to:

http://localhost:8080/node_modules/intern/
