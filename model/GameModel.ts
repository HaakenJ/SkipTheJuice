import Mongoose = require("mongoose");
import { DataAccess } from "../DataAccess";
import { IGameModel } from "../interfaces/IGameModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class GameModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                gameID: String,
                sport: String,
                hTeam: String,
                aTeam: String,
                score: String,
                moneyline: Number,
                spread: Number,
                overUnder: Number
            }
        )
    }

    public createModel(): void {
        this.model = mongooseConnection.model<IGameModel>("Games", this.schema);
    }

    public retreiveAllGames(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {GameModel}