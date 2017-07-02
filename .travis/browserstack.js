#!/usr/bin/env node

const browserstack = require('browserstack');

let WORKER_ID = 0;
let username = process.env.BROWSERSTACK_USER;
let password = process.env.BROWSERSTACK_ACCESS_KEY;

// The exports from BrowserStack Travis addon we're relying on adds
// a suffix (https://git.io/vQW21#L171), removing it here to log in
username = username.split('-travis')[0];

let client = browserstack.createClient({ username, password });

'SIGINT SIGTERM SIGHUP'.split(' ').forEach((evt) => {
  process.on(evt, () => {
    console.log(`Closed BrowserStack Worker process ${evt}`);
    if (client !== null) {
      client.terminateWorker(WORKER_ID, () => process.exit());
    }
  });
});

let name = process.env.TRAVIS_JOB_NUMBER || null;
let build = process.env.TRAVIS_BUILD_NUMBER || null;
let project = process.env.TRAVIS_REPO_SLUG || null;

let settings = {
  os: process.argv[2],
  os_version: process.argv[3],
  browser: process.argv[4],
  browser_version: process.argv[5],
  device: process.argv[6],
  url: process.argv[7],
  name,
  build,
  project
};

for (var i in settings) {
  if (settings[i] === null || settings[i] === '' || settings[i] === 'nil') {
    delete settings[i];
  }
}

console.log(settings);

client.createWorker(settings, (error, worker) => {
  if (error) console.log(error);
  WORKER_ID = worker.id
});

setTimeout(() => client.terminateWorker(WORKER_ID), 600000);
