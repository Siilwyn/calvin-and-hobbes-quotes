'use strict';

const core = require('./index.js');
const quotes = require('./quotes.json');

const test = require('ava');

test('core.all', function (t) {
    t.true(core.all.length > 0);
    t.is(core.all[0], 'It’s a magical world, Hobbes, ol’ buddy... Let’s go exploring!');
    t.is(core.all[1], 'Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.');
});

test('core.random', function (t) {
    const randomQuote = core.random();

    t.truthy(core.random());
    t.truthy(quotes.find((quote) => randomQuote === quote));
});
