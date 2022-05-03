import Mongoose = require("mongoose")

interface IGameModel extends Mongoose.Document {
    gameID: number;
    sport: string;
    hTeam: string;
    aTeam: string;
    score: string;
    moneyline: number;
    spread: number;
    overUnder; number;
}
export {IGameModel}