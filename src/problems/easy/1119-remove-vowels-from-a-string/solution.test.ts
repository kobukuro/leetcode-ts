import {removeVowels} from './solution';

describe('removeVowels', () => {
    // Example test cases
    test('should handle example 1', () => {
        expect(removeVowels("leetcodeisacommunityforcoders")).toBe("ltcdscmmntyfrcdrs");
    });

    test('should handle example 2', () => {
        expect(removeVowels("aeiou")).toBe("");
    });
});