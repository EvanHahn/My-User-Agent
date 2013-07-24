require("http").createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(req.headers["user-agent"] || "No user-agent given.");
}).listen(process.env.PORT || 8000);
