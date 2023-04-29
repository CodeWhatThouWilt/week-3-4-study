import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import countLetters from '../problems/01-count-letters.js';

describe("countLetters()", () => {
	it(`Should return an object that contains key value pairs. Each key should be a letter and the value should be the amount of times that letter appeared in the sentence. Spaces and periods should not be counted as a letter.`, 
    () => {
		assert.deepEqual(
			countLetters(
				"This is a pretty solid test sentence. Really just here to test."
			),
			{
				t: 10,
				h: 2,
				i: 3,
				s: 7,
				a: 2,
				p: 1,
				r: 3,
				e: 9,
				y: 2,
				o: 2,
				l: 3,
				d: 1,
				n: 2,
				c: 1,
				j: 1,
				u: 1,
			}
		);
	});
});
