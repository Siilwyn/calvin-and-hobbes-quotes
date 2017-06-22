#!/usr/bin/env node
'use strict';

const core = require('../src/index.js');

const fs = require('fs');
const minimist = require('minimist');
const path = require('path');
const cowsay = require('cowsay');
const wrap = require('wordwrap')(40);

const usage = fs.readFileSync(path.join(__dirname, 'usage.txt'), 'utf8');
const argv = minimist(process.argv.slice(2), {
    boolean: [ 'help', 'all', 'say' ],
    alias: { help: 'h', all: 'a', say: 's' },
});

if (argv.help) {
    // eslint-disable-next-line no-console
    console.log(usage);
    process.exit();
}

if (argv.all) {
    // eslint-disable-next-line no-console
    console.log(core.all);
    process.exit();
}

if (argv.say) {
    // eslint-disable-next-line no-console
    console.log(
        cowsay.say({
            text: wrap(core.random()),
            f: path.join(__dirname, 'calvin.cow'),
        })
    );
    process.exit();
}

// eslint-disable-next-line no-console
console.log(core.random());
