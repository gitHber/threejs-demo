const fs = require("fs");
const path = require("path");

module.exports = async (ctx, next) => {
  const {
    request: { url, method },
    response
  } = ctx;
  const fileReg = /\.\w+$/g;
  if (fileReg.test(url) && method === "GET") {
    ctx.set("content-type", "application/javascript");
    ctx.body = fs.readFileSync(path.join(__dirname, "../", url));
    await next();
  } else {
    await next();
  }
};
