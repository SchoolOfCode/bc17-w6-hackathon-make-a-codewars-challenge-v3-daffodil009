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


});
