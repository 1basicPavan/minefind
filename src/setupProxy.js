const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api1',
      createProxyMiddleware({target: "https://api.mojang.com", changeOrigin: true,})
    );

    app.use(
        '/api2',
        createProxyMiddleware({target: "https://sessionserver.mojang.com", changeOrigin: true,})
      );
  };