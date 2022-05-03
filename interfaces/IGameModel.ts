import Mongoose = require("mongoose")

interface IGameModel extends Mongoose.Document {
    gameId: number;
    sport: string;
    homeTeam: string;
    awayTeam: string;
    homeTeamScore: number,
    awayTeamScore: number,
    homeTeamMoneyLine: number,
    awayTeamMoneyLine: number,
    homeTeamSpread: number,
    awayTeamSpread: number,
    overUnder: number
}
export {IGameModel}