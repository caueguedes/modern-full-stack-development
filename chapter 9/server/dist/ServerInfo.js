"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInfo = void 0;
var path = require("path");
var fs = require("fs");
var rawInfo = fs.readFileSync(path.join(__dirname, "../serverInfo.json"));
exports.serverInfo = JSON.parse(rawInfo);
console.log("ServerInfo: ", exports.serverInfo);
//# sourceMappingURL=ServerInfo.js.map