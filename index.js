import express from 'express';
import userRoute from './controllers/userDetailsController.js'
import sequelize from './config/connection.js';
import http from "http";
import cors from "cors";

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.json({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/',userRoute);

const server = http.createServer(app);

// const io = new Server(server, {
//     cors: {
//         origin: ["http://localhost:3000"],
//         methods: ["GET", "POST"],
//     },
// });

sequelize.sync({ force: false }).then(function() {
    server.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});