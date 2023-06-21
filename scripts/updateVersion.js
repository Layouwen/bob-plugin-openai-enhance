const path = require('path')
const pkg = require('../package.json')
const fs = require('fs')

const INFO_FILE_PATH = path.resolve(__dirname, '../src/info.json')

const str = fs.readFileSync(INFO_FILE_PATH, 'utf-8')
fs.writeFileSync(INFO_FILE_PATH, str.replace(/"version": ".*"/, `"version": "${pkg.version}"`))
