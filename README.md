<h1 align="center">
  Ember CLI BrowserStack Example
</h1>

<h4 align="center">
  Example cross-browser testing with <a href="https://www.browserstack.com"BrowserStack</a> of an <a href="https://ember-cli.com/">Ember CLI</a> app.
</h4>

<p align="center">
 <a href="https://travis-ci.org/cyk/ember-browserstack-example"><img src="https://travis-ci.org/cyk/ember-browserstack-example.svg?branch=master" alt="Build Status"></a>
 <a href="(https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/cyk/ember-browserstack-example.svg" alt="Greenkeeper badge"></a>
 <!--<a href="https://codecov.io/gh/cyk/ember-browserstack-example"><img src="https://codecov.io/gh/cyk/ember-browserstack-example/branch/master/graph/badge.svg?token=xxxxxxxxx" alt="Codecov" /></a>-->
</p>


## Introduction

This application is an example implementation of the ideas presented in the blog post ["Ember CLI testing with BrowserStack"](). 

It includes:
* Cross-browser UI testing using [BrowserStack Local](https://www.browserstack.com/local-testing) and [REST API](https://www.browserstack.com/automate/rest-api)
* Travis CI BrowserStack addon integration

Read more about it (and the gotchas) on [the blog post]().

## Prerequisites

You will need the following things properly installed on your computer.

* [Yarn](https://yarnpkg.com/en/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [BrowserStack Local](https://www.browserstack.com/local-testing)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-browserstack-example`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

#### Via BrowserStack

* `BrowserStackLocal --key <key>` sets up [local connection](https://www.browserstack.com/local-testing)
* `export BROWSERSTACK_USER=<username>; export BROWSERSTACK_ACCESS_KEY=<key>` from [Automate](https://www.browserstack.com/automate) tab of BrowserStack
* `ember test --test-port 8000 -l <launcher>`
* Test port 8000 [allows Safari connection](https://www.browserstack.com/question/664)

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Inspiration / Thank You

* [Ember-cli-sauce addon](https://github.com/johanneswuerbach/ember-cli-sauce) was an informative reference for cross-browser ember testing
* Adapted part of [vedharish/browserstack-jstesting-cli](https://github.com/) for testem launcher

