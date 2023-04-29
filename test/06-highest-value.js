import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import highestValue from '../problems/06-highest-value.js';

describe("highestValue()", () => {
	it(`Should return the key associated with the highest value in the object`, () => {
		const obj = {
            test: 1,
            the: 20,
            highest: 15,
            value: 11
        }
		assert.deepEqual(highestValue(obj), 'the');
	});
});
