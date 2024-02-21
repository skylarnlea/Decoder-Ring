const {expect} = require("chai")
const {caesar} = require("../src/caesar")

describe("caesar()", () => {
    it("should be a function", () => {
        expect(typeof(caesar)).to.equal("function")
    })
    it("should return a shifted message when a happy path case is provided", () => {
        const actual = caesar("cat", 1, true)
        const expected = "dbu"
        expect(actual).to.equal(expected)
    })
    it("should return a shift message when a negative number is provided", () => {
        const actual = caesar("dog", -1, true)
        const expected = "cnf"
        expect(actual).to.equal(expected)
    })
    it("should decode a message when encode is false", () => {
        const actual = caesar("dbu", 1, false)
        const expected = "cat"
        expect(actual).to.equal(expected)
    })
    it("should decode a message when encode is false AND a negative number is provided", () => {
        const actual = caesar("cnf", -1, false)
        const expected = "dog"
        expect(actual).to.equal(expected)
    })
    it("should return false is shift is not provided", () => {
        const message = "cat";
        const actual = caesar(message);
        expect(actual).to.be.false;
    })
    it("should return false is shift is 0", () => {
        const actual = caesar("cat", 0)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false is shift is greater than 25", () => {
        const actual = caesar("cat", 99)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false is shift is less than -25", () => {
        const actual = caesar("cat", -99)
        const expected = false
        expect(actual).to.equal(expected)
    })
    it("should should ignore upper case letters", () => {
        const actual1 = caesar("CaT", 1, true)
        const actual2 = caesar("cat", 1, true)
        expect(actual1).to.equal(actual2)
    })
    it("should handle ENCODE shifts that go past the end of the alphabet", () => {
        const actual = caesar("xyz", 3, true)
        const expected = "abc"
        expect(actual).to.equal(expected)
    })
    it("should handle ENCODE shifts that go before the beginning of the alphabet", () => {
        const actual = caesar("abc", -3, true)
        const expected = "xyz"
        expect(actual).to.equal(expected)
    })
    it("should handle DECODE shifts that go past the end of the alphabet", () => {
        const actual = caesar("abc", 3, false)
        const expected = "xyz"
        expect(actual).to.equal(expected)
    })
    it("should handle DECODE shifts that go before the beginning of the alphabet", () => {
        const actual = caesar("xyz", -3, false)
        const expected = "abc"
        expect(actual).to.equal(expected)
    })
    it("should return a shifted message when non-alphabetical characters provided", () => {
        const actual = caesar("cat cat cat!", 1, true)
        const expected = "dbu dbu dbu!"
        expect(actual).to.equal(expected)
    })
    it("should return a decoded shifted message when non-alphabetical characters provided", () => {
        const actual = caesar("dbu dbu dbu!", 1, false)
        const expected = "cat cat cat!"
        expect(actual).to.equal(expected)
    })
    it("should return a encoded message when there are upper case letters, non-alphabetical characters are provided, and when letters go past the end of the alphabet", () => {
        const actual = caesar("Hello zebra!", 1, true)
        const expected = "ifmmp afcsb!"
        expect(actual).to.equal(expected)
    })
})