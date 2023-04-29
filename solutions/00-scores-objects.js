const findWinner = (arr) => {
    // By returning map we are returning the array that returns from
    // doing the map
	return arr.map((scores) => {
        // Scores represents each object we're mapping through
        // Create a new object to be returned which will add it to
        // our return array
		const obj = {};
        // Add the scores from team1 and team2 and put the sum in the obj
		obj.total = scores.team1 + scores.team2;
        // Check to see which team has a higher score
		if (scores.team1 > scores.team2) {
            // if team 1 has a higher score add key value pairs
			obj.winner = "team1";
			obj.winningScore = scores.team1;
			obj.losingScore = scores.team2;
		} else {
            // if team 2 has a higher score add key value pairs
			obj.winner = "team2";
			obj.winningScore = scores.team2;
			obj.losingScore = scores.team1;
		}
        // return the object after it has modified. This will add
        // it to the return array from the map
		return obj;
	});
};
