'use strict';

const vue3Hooks = require('..');
const assert = require('assert').strict;

assert.strictEqual(vue3Hooks(), 'Hello from vue3Hooks');
console.info('vue3Hooks tests passed');
