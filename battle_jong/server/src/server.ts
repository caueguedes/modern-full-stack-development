import path from "path";
import express, { Express } from "express";

import WebSocket from "ws";

// { score: number, stillPlaying: boolean }
const players: any = {};

const app: Express = express();
app.use("/", express.static(path.join(__dirname, "../../client/dist")));
app.listen(80, () => {
  console.log("BattleJong Express server ready.")
});


const wsServer = new WebSocket.Server({ port: 8080 }, function() {
  console.log("BattleJong WebSocket server ready.")
});

wsServer.on("connection", (socket: WebSocket) => {
  socket.on("message", (inMsg: string) => {
    const msgParts: string[] = inMsg.toString().split("_");
    const message: string = msgParts[0];
    const pid: string = msgParts[1];
    switch(message) {
      case "match":
        players[pid].score += parseInt(msgParts[2]);
        wsServer.clients.forEach(
          function each(inClient: WebSocket) {
            inClient.send(`update_${pid}_${players[pid].score}`);
          }
        );
      break;
    }
  });
});