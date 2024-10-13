const express = require('express');
const { searchRouter } = require('./src/routes/searchUsers.js');
const { importRoute } = require('./src/routes/importUsers.js');
const { registerRouter } = require('./src/routes/registerUser.js');

const server = express();
const port = 8080;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

server.use("/health", (req, res ) => {
    res.send("Working!");
});

server.use(express.json());
server.use("/api", importRoute);
server.use("/api", searchRouter);
server.use("/api", registerRouter);