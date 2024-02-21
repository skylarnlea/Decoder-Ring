// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius")

describe("polybius()", () => {
    it("should be a function", () => {
        expect(typeof(polybius)).to.equal("function")
    })
    it("should encode a word when a string is provided and encode is true", () => {
        const actual = polybius("cat", true)
        const expected = "311144"
        expect(actual).to.equal(expected)
    })
    it("should encode both i and j as '42' when ENCODING", () => {
        const actual = polybius("iii jjj", true)
        const expected = "424242 424242"
        expect(actual).to.equal(expected)
    })
    it("should ignore upper case letters when ENCODING", () => {
        const actual = polybius("CaT", true)
        const expected = "311144"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces when ENCODING", () => {
        const actual = polybius("cat cat", true)
        const expected = "311144 311144"
        expect(actual).to.equal(expected)
    })
    it("should decode a word when a string is provided and encode is false", () => {
        const actual = polybius("311144", false)
        const expected = "cat"
        expect(actual).to.equal(expected)
    })
    it("should return false if an odd number of characters without spaces is being decoded", () => {
        const actual = polybius("3111446", false)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should decode 42 as '(i/j)' when DECODING", () => {
        const actual = polybius("424242", false)
        const expected = "(i/j)(i/j)(i/j)"
        expect(actual).to.equal(expected)
    })
    it("should maintain spaces when DECODING", () => {
        const actual = polybius("311144 311144", false)
        const expected = "cat cat"
        expect(actual).to.equal(expected)
    })
    it("should encode with multiple spaces, upper case letters, and i or j", () => {
        const actual = polybius("Hi Cat Dog", true)
        const expected = "3242 311144 414322"
        expect(actual).to.equal(expected)
    })
})