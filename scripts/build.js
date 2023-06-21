const compressing = require('compressing')
const fs = require('fs')

!(async () => {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist')
  }

  await compressing.zip.compressDir('src', 'dist/bob-plugin-openai-enhance.bobplugin', { ignoreBase: true })
})()
