const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(createProxyMiddleware('/consoleApi', { 
    target: 'https://console.zhundian.ltd/',
    changeOrigin: true,
    cookieDomainRewrite: {
      '*': 'localhost'
    },
    cookiePathRewrite: {
      '*': 'localhost'
    }
    // onProxyRes: function(proxyRes, req, res) {
    //   let cookies = proxyRes.headers['set-cookie'];
    //   let cookieRegex = /Path=\/XXX\//i;
    //   //修改cookie Path
    //   if (cookies) {
    //     let newCookie = cookies.map(function(cookie) {
    //       if (cookieRegex.test(cookie)) {
    //         return cookie.replace(cookieRegex, 'Path=/');
    //       }
    //       return cookie;
    //     });
    //     //修改cookie path
    //     delete proxyRes.headers['set-cookie'];
    //     proxyRes.headers['set-cookie'] = newCookie;
    //   }
    // }
  }));
};