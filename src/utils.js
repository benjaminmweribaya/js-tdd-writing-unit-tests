// Your code here
export function pointsForWord(word) {
    if (typeof word !== "string") {
        throw new Error("Input must be a string");
    }

    let points = 0;
    for (const char of word) {
        console.log(`Processing char: ${char}`)
        if (/[aeiou]/i.test(char)) {
            // 1 point for vowels
            points += 1;
        } else if (/[a-z]/i.test(char)) {
            // 2 points for consonants
            points += 2;
        }
        // Non-alphabetic characters are ignored
    }
    console.log(`Total points for word "${word}": ${points}`);
    return points;
}
