const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/commands/clang++`
  const sklibs = {
    static: `${home}/.splashkit/commands/clang++/lib`,
    dynamic: `${home}/.splashkit/lib`
  }

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-L${sklibs.dynamic} -lSplashKit -L${sklibs.static} -lSplashKitCpp -I ${cppBuild}/include -rpath @loader_path -rpath ${sklibs.dynamic} -rpath /usr/local/lib`

  utils.runCommand(`clang++ ${clangArgs} ${userArgs}`, function (err, data) {
      if (err) {
          callback(err)
      } else {
          callback(null, 'Successfully compiled with clang++ 🎉 ')
      }
  })
}

 module.exports = {
  execute: execute
}
