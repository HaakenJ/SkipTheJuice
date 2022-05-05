"use strict";
exports.__esModule = true;
exports.BetModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var BetModel = /** @class */ (function () {
    function BetModel() {
        this.createSchema();
        this.createModel();
    }
    BetModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            betId: String,
            userId1: String,
            userId2: String,
            gameId: String,
            betType: String,
            amount: Number,
            accepted: Boolean,
            finished: Boolean
        }, { collection: "bets" });
    };
    BetModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Bets", this.schema);
    };
    BetModel.prototype.retreiveBetList = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    BetModel.prototype.retreiveSingleBet = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return BetModel;
}());
exports.BetModel = BetModel;
