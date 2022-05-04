import Mongoose = require("mongoose")
import { DataAccess } from "../DataAccess";
import {IBetModel} from '../interfaces/IBetModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class BetModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                betId: String,
                userId1: String,
                userId2: String,
                gameId: String,
                betType: String,
                amount: Number,
                accepted: Boolean,
                finished: Boolean
            }, {collection: "bets"}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IBetModel>("Bets", this.schema);
    }

    public retreiveBetList(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {BetModel}