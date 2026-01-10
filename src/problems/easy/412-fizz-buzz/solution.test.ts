import {fizzBuzz} from './solution';

describe('fizzBuzz', () => {
    it('Example 1: n = 3', () => {
        expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    });

    it('Example 2: n = 5', () => {
        expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });

    it('Example 3: n = 15', () => {
        expect(fizzBuzz(15)).toEqual([
            "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"
        ]);
    });
});
