const path = require('path');

module.exports = {
    resolver: require.resolve(`jest-pnp-resolver`),
    moduleNameMapper: {
        '^@src/(.*)$': path.resolve(__dirname, './src/$1')
    },
    coverageDirectory: 'src',

    bail: 1,
    verbose: true,
    testTimeout: 4000,
}