import Mongoose = require("mongoose")

interface IUserModel extends Mongoose.Document {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    ssn: string;
    venmoUserName: string;
    address: string;
    password: string;
    userWins: number;
    userLosses: number;
}
export {IUserModel}