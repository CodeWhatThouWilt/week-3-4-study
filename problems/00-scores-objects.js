/***********************************************************************
Write a function findWinner(arr) that will take in an 
array of objects where each object contains
team scores for a basketball game, return an array
containing objects that have the following:
- total score of both teams (key should be `total`)
- winning team (key should be `winner`)
- winning team's score (key should be `winningScore`)
- losing teams score (key should be `losingScore`)

Example 1:
const games = [
    { team1: 42, team2: 50 },
    { team1: 72, team2: 80 },
    { team1: 57, team2: 52 },
    { team1: 33, team2: 30 }
];

console.log(findWinner(games));
^^ should print:
[
    { total: 92, winner: 'team2', winningScore: 50, losingScore: 42 },
    { total: 152, winner: "team2", winningScore: 80, losingScore: 72},
    { total: 109, winner: "team1", winningScore: 57, losingScore: 52},
    { total: 63, winner: "team1", winningScore: 33, losingScore: 30}
]

***********************************************************************/


// your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
let exportFunc;
try {
	exportFunc = findWinner;
} catch (error) {
	exportFunc = null;
}
export default exportFunc;
