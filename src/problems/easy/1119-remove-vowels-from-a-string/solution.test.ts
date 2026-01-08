import {removeVowels} from './solution';

describe('removeVowels', () => {
    // Example test cases
    it('should handle example 1', () => {
        expect(removeVowels("leetcodeisacommunityforcoders")).toBe("ltcdscmmntyfrcdrs");
    });

    it('should handle example 2', () => {
        expect(removeVowels("aeiou")).toBe("");
    });
});