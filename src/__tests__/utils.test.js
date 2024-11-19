// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
    it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
        const word = "test";
        const points = pointsForWord(word);
        expect(points).toBe(7);
    });

    it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
        const points = pointsForWord(word);
        expect(points).toBe(7);
    });

    it("handles an empty string", () => {
        const word = "";
        const points = pointsForWord(word);
        expect(points).toBe(0);
    });

    it("handles non-alphanumeric characters", () => {
        const word = "t3$t!";
        const points = pointsForWord(word);
        expect(points).toBe(4); // Non-alphabetic characters should not contribute.
    });

    it("throws an error if input is not a string", () => {
        expect(() => pointsForWord(123)).toThrow("Input must be a string");
    });
});
