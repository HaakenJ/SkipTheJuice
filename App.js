"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var BetModel_1 = require("./model/BetModel");
var UserModel_1 = require("./model/UserModel");
var GameModel_1 = require("./model/GameModel");
var crypto = require("crypto");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Bets = new BetModel_1.BetModel();
        this.Users = new UserModel_1.UserModel();
        this.Games = new GameModel_1.GameModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get("/app/bets/all", function (req, res) {
            console.log("Query for all bets");
            _this.Bets.retreiveBetList(res);
        });
        router.post("/app/bets/new", function (req, res) {
            var id = crypto.randomBytes(16).toString("hex");
            console.log(req.body);
            var jsonObj = req.body;
            console.log("body: " + JSON.stringify(req.body));
            jsonObj.betId = id;
            console.log("bodyAfter: " + JSON.stringify(req.body));
            _this.Bets.model.create([jsonObj], function (err) {
                if (err) {
                    console.log("object creation failed");
                }
            });
            res.send();
        });
        router.get("/app/bets/:betId", function (req, res) {
            var id = req.params['betId'];
            console.log("Query single bet with id: " + id);
            _this.Bets.retreiveSingleBet(res, { betId: id });
        });
        this.expressApp.use("/", router);
        this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
        this.expressApp.use("/images", express.static(__dirname + "/public/img"));
        this.expressApp.use("/", express.static(__dirname + "/public"));
    };
    return App;
}());
exports.App = App;
