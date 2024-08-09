// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript

// import expect and test from Vitest
import { describe, expect, test, assertType, expectTypeOf } from "vitest";

// import  functions & variables from main.js
import { areYouPlayingBanjo, whoWillBePlayingBanjo } from "./main";
import { artist, venue } from "./main";
// create a test

describe("areYouPlayingBanjo", () => {
	// test-1 for names beginning with r or R
	test('should return correct result for names starting with "r"', () => {
		expect(areYouPlayingBanjo("rick")).toBe(
			`rick plays banjo with ${artist} at the ${venue} tonight.`
		);

		expect(areYouPlayingBanjo("Robert")).toBe(
			`Robert plays banjo with ${artist} at the ${venue} tonight.`
		);
	});

	// test-2  for names not beginning with r or R
	test('should return correct result for names not starting with "r"', () => {
		expect(areYouPlayingBanjo("alice")).toBe(
			"alice can attend the performance tonight."
		);

		expect(areYouPlayingBanjo("peter")).toBe(
			"peter can attend the performance tonight."
		);
	});

	// test-3 if the name is empty
	test("should handle empty input", () => {
		expect(areYouPlayingBanjo("")).toBe("");
	});

	// test-4 if name length is less than 2
	test("if name length is less than 2", () => {
		expect(() => areYouPlayingBanjo("a")).toThrowError(
			"Name length must be between 2 and 50 characters"
		);
	});

	//test-5 if name length is greater than 50 characters

	test("if name length is greater than or equal to 50 characters", () => {
		expect(() =>
			areYouPlayingBanjo("abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz")
		).toThrowError("Name length must be between 2 and 50 characters");
	});

	// // test-6 check if the datatype is valid
	// test('if the function can handle valid names', () => {
	//     expectTypeOf(areYouPlayingBanjo).toBeFunction()
	//     expectTypeOf(areYouPlayingBanjo).parameter(0).toMatchTypeOf<string>()

	//     /assert that the first letter is a letter
	//     const nameRegex = /^[a-zA-Z]/

	//     // ensure its is a string
	//     assertType < string >(areYouPlayingBanjo.parameter(0))

	//     // test with a valid name
	//     const validName = 'Amy';
	//     expect(nameRegex.test(validName)).toBe(true);

	//     // test with invalid name
	//     const invalidName = "1Ellie";
	//     expect(nameRegex.test(invalidName)).toBe(false);
	// })

	// test-6 if name has leading or trailing white spaces

	// test-7 if name has mixed characters of upper and lower case

	// test-8 if name has special characters

	// test-9 if name has numbers

	// test-10 if name is too long more than 50 characters

	// test-11 if name is too short - just one letter

	// test-12 if name has non-ascii characters(chinese)
});

describe("who will from your team will be playing banjo", () => {
	// test -1
	test("should handle various names", () => {
		//arrange
		const names = ["Robert", "Amy", "dan", "", "rita"];

		const expected = [
			"Robert plays banjo with Hana Stretton at the Royal Albert Hall tonight.",
			"Amy can attend the performance tonight.",
			"dan can attend the performance tonight.",
			"",
			"rita plays banjo with Hana Stretton at the Royal Albert Hall tonight.",
		];
		//act

		//assert
		expect(whoWillBePlayingBanjo(names)).toEqual(expected);
	});

	// test-2 - to handle empty array

	// test- 3 to handle single name in the array with starting name R

	// test-4 to handle single name in the array that does not begin with R

	//  test-5 to handle case sensitivity

	// test-6 to handle leading and trailing whitespace

	// test-7 to handle non-string input
});
