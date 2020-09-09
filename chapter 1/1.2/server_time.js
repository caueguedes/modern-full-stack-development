require("http").createServer((inRequest, inResponse) => { 
    const requestModule = require("request");
    requestModule(
        "http://worldtimeapi.org/api/timezone/America/Sao_Paulo",
        function (inErr, inResp, inBody) {
            inResponse.end(
                `Hello from my Node web server: ${inBody}`
            );
        }
    ); 
}).listen(80);
