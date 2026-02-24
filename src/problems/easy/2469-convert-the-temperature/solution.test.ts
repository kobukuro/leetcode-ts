import {convertTemperature} from './solution';

describe('convertTemperature', () => {
    it('Example 1: celsius = 36.50', () => {
        const celsius = 36.50;
        const result = convertTemperature(celsius);
        const expected = [309.65000, 97.70000];

        expect(result).toHaveLength(2);
        expect(result[0]).toBeCloseTo(expected[0], 5);
        expect(result[1]).toBeCloseTo(expected[1], 5);
    });

    it('Example 2: celsius = 122.11', () => {
        const celsius = 122.11;
        const result = convertTemperature(celsius);
        const expected = [395.26000, 251.79800];

        expect(result).toHaveLength(2);
        expect(result[0]).toBeCloseTo(expected[0], 5);
        expect(result[1]).toBeCloseTo(expected[1], 5);
    });
});