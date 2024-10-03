import express from "express";
async function server() {
  const app = express();
  app.get("/", (req, res) => {
    res.status(200).json({ message: "radhe radhe bol" });
  });
  app.listen(80, () => {
    console.log("server is running on 80 port");
  });
}

server();
