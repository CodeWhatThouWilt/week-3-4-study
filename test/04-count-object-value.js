import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import countValue from '../problems/04-count-object-value.js'

describe("countValue()", () => {
	it(`Should return a count of how many times the value appears as a key or value in the object`, () => {
		const obj1 = { test: "number", one: "test" };
		assert.deepEqual(countValue("test", obj1), 2);

		const obj2 = {
			this: "this",
            test: "this",
            nice: "this"
		};
		assert.deepEqual(countValue("this", obj2), 4);

        const obj3 = {
            not: "in",
            this: "object",
            sorry: "haha"
        };
        assert.deepEqual(countValue("not here", obj3), 0);
	});
});
