db = db.getSiblingDB("skipTheJuice")
db.createCollection("bets")
betsCollection = db.getCollection("bets")
betsCollection.remove({})
betsCollection.insert(
	{
		betId: "1",
		userId1: "1",
		userId2: "2",
		gameId: "1",
		betType: "spread",
		amount: "100",
		accepted: "true",
		finished: "false"
	}
)
betsCollection.insert(
	{
		betId: "2",
		userId1: "1",
		userId2: "3",
		gameId: "2",
		betType: "moneyLine",
		amount: "50",
		accepted: "false",
		finished: "false"
  }
)
betsCollection.insert(
	{
		betId: "3",
		userId1: "2",
		userId2: "3",
		gameId: "3",
		betType: "spread",
		amount: "150",
		accepted: "true",
		finished: "true"
  }
)
db.createCollection("users")
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insert(
	{
		userId: "1",
		firstName: "kramer",
		lastName: "johnson",
		email: "noneofyourbusiness@gmail.com",
		ssn: "2kddkend5234nd2",
		venmoUserName: "@kramerkramerkramer",
		address: "123123 somestreet St",
		password: "3dk56skd63",
		userWins: "123463423452465",
		userLosses: "0"
	}
)
usersCollection.insert(
	{
		userId: "2",
		firstName: "elijah",
		lastName: "oglivy",
		email: "noneofyourbusiness2@gmail.com",
		ssn: "2kddkend5234nd3",
		venmoUserName: "@elielieli",
		address: "123124 somestreet St",
		password: "3dk56skd64",
		userWins: "25",
		userLosses: "25"
	}
)
usersCollection.insert(
	{
		userId: "3",
		firstName: "anthony",
		lastName: "pinza",
		email: "noneofyourbusiness3@gmail.com",
		ssn: "2kddkend5234nd4",
		venmoUserName: "@anthonyanthonyanthony",
		address: "123125 somestreet St",
		password: "3dk56skd65",
		userWins: "25",
		userLosses: "25"
	}
)

db.createCollection("games")
gamesCollection = db.getCollection("games")
gamesCollection.remove({})
gamesCollection.insert(
	{
		gameId: "1",
		sport: "baseball",
		homeTeam: "mariners",
		awayTeam: "astros",
		homeTeamScore: "9",
		awayTeamScore: "1",
		homeTeamMoneyLine: "-110",
		awayTeamMoneyLine: "110",
		homeTeamSpread: "-4",
		awayTeamSpread: "4",
		overUnder: "8"
	}
)
gamesCollection.insert(
	{
		gameId: "2",
		sport: "baseball",
		homeTeam: "red-sox",
		awayTeam: "angels",
		homeTeamScore: "1234",
		awayTeamScore: "1",
		homeTeamMoneyLine: "-110",
		awayTeamMoneyLine: "110",
		homeTeamSpread: "-4",
		awayTeamSpread: "4",
		overUnder: "12"
	}
)
gamesCollection.insert(
	{
		gameId: "3",
		sport: "baseball",
		homeTeam: "white-sox",
		awayTeam: "cubs",
		homeTeamScore: "0",
		awayTeamScore: "15",
		homeTeamMoneyLine: "-110",
		awayTeamMoneyLine: "110",
		homeTeamSpread: "-4",
		awayTeamSpread: "4",
		overUnder: "5"
	}
)