let tournament_score = [9,8,8,7.5,6,'forfeited']

let b = tournament_score.toString()
console.log(b, typeof b)

let c = tournament_score.join(" and ")
console.log(c, typeof c)

let d = tournament_score.pop() // pop returns the popped element
console.log(d)
console.log(tournament_score)

let e = tournament_score.push(4) // push returns the new length
console.log(e)
console.log(tournament_score)