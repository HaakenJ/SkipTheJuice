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
                betID: String,
                User: Object,
                Games: Object,
                betType: String,
                amount: Number,
                accepted: Boolean,
                finished: Boolean
            }
        )
    }

    public createModel(): void {
        this.model = mongooseConnection.model<BetModel>("Bets", this.schema);
    }

    public retreiveBetList(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {BetModel}