import Mongoose = require("mongoose")

interface IBetModel extends Mongoose.Document {
    betID: string;
    User: object;
    Games: object;
    betType: string;
    amount: number;
    accepted: boolean;
    finished: boolean;
}
export {IBetModel}