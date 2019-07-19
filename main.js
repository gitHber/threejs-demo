const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const { resolve } = require("path");
const tree = require("./util/koa-tree");
const file = require("./util/koa-file");
const page = require("./util/koa-page");


app.use(
  views(resolve(__dirname, "./public"), {
    extension: "pug"
  })
);
app.use(async (ctx, next) => {
  await ctx.render("index");
  await next();
});

app.use(tree);
app.use(file);
app.use(page);

console.log("http://localhost:8000");
app.listen(8000);
