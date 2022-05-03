import Mongoose = require("mongoose")

interface IBetModel extends Mongoose.Document {
    betId: string;
    userId1: number;
    userId2: number;
    gameId: number;
    betType: string;
    amount: number;
    accepted: boolean;
    finished: boolean;
}
export {IBetModel}