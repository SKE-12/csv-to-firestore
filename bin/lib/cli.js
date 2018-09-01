
module.exports = (argv) => require('commander')
    .version('1.0.0')
    .usage('[options] <file>')
    .option('-c, --config [config]', 'Add config')
    .parse(argv)