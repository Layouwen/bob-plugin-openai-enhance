const pkg = require('../package.json')
const compressing = require('compressing')
const fs = require('fs')

!(async () => {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
  }

  await compressing.zip.compressDir('src', `dist/openai-enhance-${pkg.version}.bobplugin`, { ignoreBase: true })
})()
