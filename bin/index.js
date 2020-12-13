#!/usr/bin/env node

async function run(argv) {
    // initialize console program
    const cli = require('./lib/cli')(argv)

    // load config file
    const { path, firebase, csv, mapper } = require('./lib/loadConfig')(cli.config)

    // load csv data
    const data = await require('./lib/loadCSV')(path, csv)

    // upload to Firebase
    require('./lib/updateFirebase')(firebase, data, mapper)
}

run(process.argv)
