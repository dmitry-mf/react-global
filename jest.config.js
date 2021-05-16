
module.exports = {
    resolver: require.resolve(`jest-pnp-resolver`),
    moduleNameMapper: {
        "\\.(css|less|scss)$": "identity-obj-proxy",
        "^@src(.*)$": "<rootDir>",
        "^@components(.*)$": "<rootDir>/src/components$1",
    },
    coverageDirectory: 'src',
    collectCoverage: true,
    coverageReporters: ["json"],

    bail: 1,
    verbose: true,
    testTimeout: 4000,
}