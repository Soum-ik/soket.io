import express from 'express';
import { createServer } from 'node:http';
import path from 'node:path';
import { Server } from 'socket.io';

// connection to the public
const app = express();
app.use(express.static(path.resolve("./public")));

const server = createServer(app);
const io = new Server(server);
// create connection 
io.on("connection", (socket) => {
    console.log(" A new user connection", socket.id);
});


app.get('/', (req, res) => {
    return res.sendFile('/pulic/index.html');
});

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
