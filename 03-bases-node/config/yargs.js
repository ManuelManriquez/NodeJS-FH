const argv = require('yargs')
    .options(
        {
            'b': {
                alias: 'base',
                type: 'number',
                description: 'base para tabla de multiplicar',
                demandOption: true
            },
            'l': {
                alias: 'listar',
                type: 'boolean',
                default: false
            }
        })

    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que se un numero';
        }
        return true;
    })
    .argv;

    module.exports = argv;