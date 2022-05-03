import Mongoose = require("mongoose")

interface IBetModel extends Mongoose.Document {
    betId: string;
    userId1: string;
    userId2: string;
    gameId: string;
    betType: string;
    amount: number;
    accepted: boolean;
    finished: boolean;
}
export {IBetModel};