// 根据page配置页面
const path = require('path')
const fs = require('fs')

const root = path.resolve(__dirname, '../page');

function readDir(dir) {
  return fs.readdirSync(dir).map(name => {
    const fDir = path.join(dir, name)
    if(fs.statSync(fDir).isDirectory()){
      return {name, files: readDir(fDir)}
    }else {
      return name
    }
  })
}

function renderTree(tree, dir='/page/') {
  let html = ''
  tree.map(i => {
    if(typeof i === 'string') {
      name = i.split('.')[0]
      html += `<li><a href="${dir+name}">第${name}章</a></li>`
    } else {
      html+=`<h3>${i.name}</h3>${renderTree(i.files, dir+i.name+'/')}`
    }
  })
  return `<ul>${html}</ul>`
}

module.exports = async (ctx, next) => {
  const tree = renderTree(readDir(root))
  ctx.body = ctx.body.slice(0, -14) + tree + "</body></html>";
  await next();
};