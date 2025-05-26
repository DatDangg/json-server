const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(__dirname + "/../db.json"); // <-- chú ý đường dẫn
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

// Export handler theo đúng yêu cầu của Vercel
module.exports = (req, res) => {
  server(req, res);
};
