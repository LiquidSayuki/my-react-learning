const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        '/dev',
        createProxyMiddleware({
            target:"https://7rdolkd2q3.execute-api.us-east-1.amazonaws.com",
            changeOrigin:true,
        })
    );
};