#!/usr/bin/env node
'use strict';

const core = require('../src/index.js');

const fs = require('fs');
const minimist = require('minimist');
const path = require('path');

const usage = fs.readFileSync(path.join(__dirname, 'usage.txt'), 'utf8');
const argv = minimist(process.argv.slice(2), {
    boolean: [ 'help', 'all' ],
    alias: { help: 'h', all: 'a' }
});

if (argv.help) {
    console.log(usage);
    process.exit();
}

if (argv.all) {
    console.log(core.all);
    process.exit();
}

console.log(core.random());
