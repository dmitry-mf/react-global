import { testFunction } from './index';

describe('function test', () => {
    test('expected string', () => {
        expect(testFunction()).toContain('done');
    })
});