const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const cppBuild = `${home}/.splashkit/commands/g++`
  const sklibs = {
    static: `${home}/.splashkit/commands/g++/lib`,
    dynamic: `${home}/.splashkit/lib`
  }

  const userArgs = utils.argsToString(argv['original_string'])
  const clangArgs = `-L${sklibs.dynamic} -lSplashKit -L${sklibs.static} -lSplashKitCpp -I ${cppBuild}/include -rpath $ORIGIN -rpath ${sklibs.dynamic} -rpath /usr/local/lib`

  utils.runCommand(`g++ ${clangArgs} ${userArgs}`, function (err, data) {
      if (err) {
          callback(err)
      } else {
          callback(null, 'Successfully compiled with g++ 🎉 ')
      }
  })
}

 module.exports = {
  execute: execute
}
