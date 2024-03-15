'use strict';

const libDemo = require('..');
const assert = require('assert').strict;

assert.strictEqual(libDemo(), 'Hello from libDemo');
console.info('libDemo tests passed');
