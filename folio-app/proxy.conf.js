const PROXY_CONFIG = [{
  context: [
    '/api'
  ],
  target: "http://localhost:4728",
  secure: false,
  changeOrigin: true
}];

module.exports = PROXY_CONFIG;
