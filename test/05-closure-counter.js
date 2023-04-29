import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import countFrom from "../problems/05-closure-counter.js"

describe("countFrom()", () => {
    it(`Should return a function on first call`, () => {
        const shouldBeFunc = countFrom();
		assert.deepEqual(typeof shouldBeFunc, 'function');
	});

    it(`Subsequent calls when a number is provided should return a number 1 higher than the previous call`, 
    () => {
		const providedNum = countFrom(12);
		assert.deepEqual(providedNum(), 13);
        assert.deepEqual(providedNum(), 14);
        assert.deepEqual(providedNum(), 15);
        assert.deepEqual(providedNum(), 16);
        assert.deepEqual(providedNum(), 17);
	});

    it(`Subsequent calls when a number is not provided should return a number 1 higher than the previous call but starting at 0`, () => {
		const noNumProvided = countFrom();
		assert.deepEqual(noNumProvided(), 1);
		assert.deepEqual(noNumProvided(), 2);
		assert.deepEqual(noNumProvided(), 3);
		assert.deepEqual(noNumProvided(), 4);
		assert.deepEqual(noNumProvided(), 5);
	});
});
