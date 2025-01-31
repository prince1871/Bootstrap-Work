const http = require('http');
const app = require('./app');
const httpServer = http.createServer(app);
const connectDb = require('./helpers/dbconfig');

const { PORT } = require('./config/index');

const startServer = async () => {
    await connectDb();
    httpServer.listen (PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
