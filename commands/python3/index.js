const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `"${home}/.splashkit/lib"`
  const skPythonLibrary = `${home}/.splashkit/commands/python3`

  const userArgs = utils.argsToString(argv['original_string'])

  utils.runCommand(`DYLD_LIBRARY_PATH=${sklibs} PYTHONPATH=${skPythonLibrary} python3 ${userArgs}`, function (err, data) {
    if (err) {
      callback(err)
    } else {
      callback(null, 'Successfully compiled with python3 🎉')
    }
  })
}

module.exports = {
  execute: execute
}
