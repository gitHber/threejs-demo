const fs = require("fs");
const path = require("path");

module.exports = async (ctx, next) => {
  const {
    request: { url, method },
    response
  } = ctx;
  const fileReg = /\.\w+$/g;
  if (!fileReg.test(url) && url.startsWith("/page") && method==='GET') {
    await ctx.render("index");
    ctx.body = ctx.body.slice(0, -14) + `<script src='${url}.js'></script></body></html>`;
    await next();
  } else {
    await next();
  }
};
