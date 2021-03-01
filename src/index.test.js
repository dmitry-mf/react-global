const testFunction = () => ('done');

describe('function test', () => {
    test('expected string', () => {
        expect(testFunction()).toContain('done');
    })
});