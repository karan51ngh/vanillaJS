let tournament_score = [9,8,8,7.5,6,'forfeited']

console.log(tournament_score[0])
console.log(tournament_score[1])
console.log(tournament_score[2])
console.log(tournament_score[3])
console.log(tournament_score[4])
console.log(tournament_score[5])
console.log(tournament_score[6]) // undefined

console.log(tournament_score.length)

tournament_score[6] = 4; // addint elements;
console.log(tournament_score[6]);

console.log(typeof tournament_score) // arrays are Objects