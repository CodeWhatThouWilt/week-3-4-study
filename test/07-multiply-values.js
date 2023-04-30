import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import multiplyValues from '../problems/07-multiply-values.js';

describe("multiplyValues()", () => {
	it(`Should return an array of objects that contains a key, total, that contains the product of all previous keys`, () => {
		const arr = [
			{ keyOne: 5, keyTwo: 9, keyThree: 22 },
			{ keyOne: 6, keyTwo: 3, keyThree: 4 },
			{ keyOne: 2, keyTwo: 4, keyThree: 9 },
			{ keyOne: 10, keyTwo: 12, keyThree: 18 },
			{ keyOne: 0, keyTwo: 8, keyThree: 50 },
		];

        const result = [
			{ total: 990 },
			{ total: 72 },
			{ total: 72 },
			{ total: 2160 },
			{ total: 0 },
		];
		assert.deepEqual(multiplyValues(arr), result);
	});
});
