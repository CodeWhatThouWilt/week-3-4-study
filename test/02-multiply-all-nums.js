import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import getProduct from '../problems/02-multiply-all-nums.js'

describe("getProduct()", () => {
	it(`Should return the product of all numbers`, () => {
		assert.deepEqual(getProduct(5,7,8), 280);
        assert.deepEqual(getProduct(1), 1);
        assert.deepEqual(getProduct(1, 0), 0);
        assert.deepEqual(getProduct(22, 55, 66, 2, 780), 124581600);
	});
});
