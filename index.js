const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "ReserveBetSlip/Reserve": "/Reserve",
  "FEWFixture/Sports": "/Sports",
  "FEWHome/Upcoming?Culture=:culture&StartRecord=:startRecord": "/Upcoming",
  "Betslip/Place": "/Place",
  "FEWBetSlip/History": "/History",
  "FEMobile/GetGroupedMatches": "/GetGroupedMatches",
  "FEMobile/GetMatchPlayerOdds": "/GetMatchPlayerOdds",
  "FEMobile/FixturesMenu": "/FixturesMenu",
  "FEMobile/GetMatchTabs": "/GetMatchTabs",
  "FEWBetslip/CalculateBonus": "/CalculateBonus",
  "ReserveBetSlip/Retrieve": "/Retrieve"
}))
server.use(router);

server.listen(port);
