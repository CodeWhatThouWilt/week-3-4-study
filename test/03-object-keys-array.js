import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import getKeys from '../problems/03-object-keys-array.js';

describe("getKeys()", () => {
	it(`Should return an array of all the object's keys`, () => {
        const obj1 = { test: "number", one: "here" }
		assert.deepEqual(getKeys(obj1), ['test', 'one']);

        const obj2 = {
            this: "is",
            another: "test",
            obj: "for",
            the: "function"
        }
		assert.deepEqual(getKeys(obj2), ["this", "another", "obj", "the"]);
	});
});
