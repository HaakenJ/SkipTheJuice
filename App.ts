import * as express from "express";
import * as bodyParser from "body-parser";
import {BetModel} from "./model/BetModel";
import {UserModel} from "./model/UserModel";
import {GameModel} from "./model/GameModel";
import * as crypto from "crypto";

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Bets:BetModel;
  public Users:UserModel;
  public Games:GameModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Bets = new BetModel();
    this.Users = new UserModel();
    this.Games = new GameModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    
    // get all bets
    let router = express.Router();
    router.get("/app/bets/all", (req, res) => {
        console.log("Query for all bets");
        this.Bets.retreiveBetList(res);
    });

    // create new bet
    router.post("/app/bets/new", (req, res) => {
      const id = crypto.randomBytes(16).toString("hex");
        var jsonObj = req.body;
        jsonObj.betId = id;
        this.Bets.model.create([jsonObj], (err) => {
            if (err) {
                console.log("object creation failed");
            } else {
                console.log("object creation successful");
            }
        });
        res.send();
    });

    // get a bet by id
    router.get("/app/bets/:betId", (req, res) => {
          var id = req.params['betId'];
          console.log("Query single bet with id: " + id);
          this.Bets.retreiveSingleBet(res, {betId:id});
      });

    this.expressApp.use("/", router);

    this.expressApp.use("/app/json/", express.static(__dirname+"/app/json"));
    this.expressApp.use("/images", express.static(__dirname+"/public/img"));
    this.expressApp.use("/", express.static(__dirname+"/public"));
    
  }

}

export {App};