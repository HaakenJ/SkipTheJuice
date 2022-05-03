import Mongoose = require("mongoose")

interface UserModel extends Mongoose.Document {
    userID: string;
    fName: string;
    lName: string;
    email: string;
    SSN: string;
    venmoID: string;
    address: string;
    password: string;
    userWins: number;
    userLosses: number;
}
export {UserModel}