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
            betID: String,
            userId1: Number,
            userId2: Number,
            gameId: Number,
            betType: String,
            amount: Number,
            accepted: Boolean,
            finished: Boolean
        });
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
    return BetModel;
}());
exports.BetModel = BetModel;
