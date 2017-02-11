const fs = require('fs')

let commandDir = __dirname
let cmds = fs.readdirSync(commandDir)
             .filter(cmd => cmd != 'index.js' && cmd != '.DS_Store')
             .map(cmd => [cmd, require(commandDir + '/' + cmd)] )

module.exports = new Map(cmds)
