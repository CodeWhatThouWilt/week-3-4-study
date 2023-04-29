import assert from "assert";
import chai from "chai";
const expect = chai.expect;
import spies from "chai-spies";
chai.use(spies);

import findWinner from "../problems/00-scores-objects.js";
console.log("####", findWinner)
describe("findWinner()", () => {
	it(`Should return an array of objects containing the keys:
            total (total score of game),
            winner (winning team name),
            winningScore (winning team score),
            losingScore (losing team score)`, () => {
		assert.deepEqual(
			findWinner([
				{ team1: 42, team2: 50 },
				{ team1: 72, team2: 80 },
				{ team1: 57, team2: 52 },
				{ team1: 33, team2: 30 },
			]),
			[
				{
					total: 92,
					winner: "team2",
					winningScore: 50,
					losingScore: 42,
				},
				{
					total: 152,
					winner: "team2",
					winningScore: 80,
					losingScore: 72,
				},
				{
					total: 109,
					winner: "team1",
					winningScore: 57,
					losingScore: 52,
				},
				{
					total: 63,
					winner: "team1",
					winningScore: 33,
					losingScore: 30,
				},
			]
		);
	});
});
