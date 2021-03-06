"use strict";
exports.__esModule = true;
exports.GameModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var GameModel = /** @class */ (function () {
    function GameModel() {
        this.createSchema();
        this.createModel();
    }
    GameModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            gameId: String,
            sport: String,
            homeTeam: String,
            awayTeam: String,
            homeTeamScore: Number,
            awayTeamScore: Number,
            homeTeamMoneyLine: Number,
            awayTeamMoneyLine: Number,
            homeTeamSpread: Number,
            awayTeamSpread: Number,
            overUnder: Number
        }, { collection: "games" });
    };
    GameModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Games", this.schema);
    };
    GameModel.prototype.retreiveAllGames = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return GameModel;
}());
exports.GameModel = GameModel;
