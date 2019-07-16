/* eslint-disable */
const fs = require('fs')
const path = require('path')

function findMarkdown(dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err

    files.forEach((fileName) => {
      let innerDir = `${dir}/${fileName}`
      if (fileName.indexOf('.') !== 0) {
        fs.stat(innerDir, function (err, stat) {
          if (stat.isDirectory()) {
            findMarkdown(innerDir, callback)
          } else {
            // 过滤不想要的
            if ('./docs/README.md' !== innerDir && path.extname(innerDir) === '.md') {
              callback(innerDir)
            }
          }
        })
      }

    })
  })
}

module.exports = findMarkdown