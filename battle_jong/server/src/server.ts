import path from "path";
import express, { Express } from "express";

import WebSocket from "ws";
import { WSANOTINITIALISED } from "constants";

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
        wsServer.clients.forEach(function each(inClient: WebSocket) {
            inClient.send(`update_${pid}_${players[pid].score}`);
          }
        );
      break;

      case "done":
        players[pid].stillPlaying = false;
        let playersDone: number = 0;
        for (const player in players) {
          if(players.hasOwnProperty(player)) {
            if(!players[player].stillPlaying){
              playersDone++;
            }
          }
        }
        // Checking end of game
        if (playersDone === 2) {
          let winningPID: string;
          const pids: string[] = Object.keys(players);
        
          if (players[pids[0]].score > players[pids[1]]) {
            winningPID = pids[0];
          } else {
            winningPID = pids[1];
          }

          wsServer.clients.forEach(
            function each(inClient: WebSocket) {
              inClient.send(`gameOver_${winningPID}`)
            }
          );
        } 
      break;


    }
  });
});