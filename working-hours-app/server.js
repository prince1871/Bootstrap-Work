const http = require('http');
const app = require('./app');
const httpServer = http.createServer(app);
const { PORT } = require('./src/config/index');

const startServer = async () => {
    httpServer.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();
