const path = require('path')
const pkg = require('../package.json')
const fs = require('fs')

const PROJECT_PATH = path.resolve(__dirname, '../')
const INFO_FILE_PATH = path.resolve(PROJECT_PATH, './src/info.json')

const str = fs.readFileSync(INFO_FILE_PATH, 'utf-8')
fs.writeFileSync(INFO_FILE_PATH, str.replace(/"version": ".*"/, `"version": "${pkg.version}"`))

const dirs = fs.readdirSync(path.resolve(PROJECT_PATH))
dirs.forEach(pathname => {
  if (/^README.*\.md$/g.test(pathname)) {
    const readme = fs.readFileSync(path.resolve(PROJECT_PATH, pathname), 'utf-8')
    const regex = new RegExp(
      '(https://github.com/Layouwen/bob-plugin-openai-enhance/releases/download/)(.*?)(/openai-enhance-)(.*?)(\\.bobplugin)',
      'g'
    )
    const replaceReadme = readme.replace(regex, `$1v${pkg.version}$3${pkg.version}$5`)
    fs.writeFileSync(path.resolve(PROJECT_PATH, pathname), replaceReadme, 'utf-8')
  }
})
