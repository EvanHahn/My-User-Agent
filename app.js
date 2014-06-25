require("http").createServer(function(req, res) {
  var ua = req.headers["user-agent"];
  var code = ua ? 200 : 400;
  res.writeHead(code, { "Content-Type": "text/plain" });
  res.end(ua || "No user-agent given.");
}).listen(process.env.PORT || 8000);
