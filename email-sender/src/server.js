const http = require('http');
const app = require('./app');
const httpserver = http.createServer(app);
const envVariables = require('./constants/index')

const {PORT} = envVariables;

httpserver.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});