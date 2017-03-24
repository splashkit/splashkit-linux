const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/commands/clang++`
  const sklibs = `${home}/.splashkit/lib`
  const skPasUnits = `${home}/.splashkit/commands/fpc`

  const userArgs = utils.argsToString(argv['original_string'])
  const fpcArgs = `-S2 -Sh -Cg -Fu${skPasUnits} -k"-L${sklibs}" -k"-lSplashKit" -k"-rpath=$ORIGIN -rpath=${sklibs} -rpath=/usr/local/lib"`

  utils.runCommand(`fpc ${userArgs} ${fpcArgs}`, function (err, data) {
      if (err) {
          callback(err)
      } else {
          callback(null, '🎉  Successfully compiled with fpc 🎉')
      }
  })
}

 module.exports = {
  execute : execute
}
