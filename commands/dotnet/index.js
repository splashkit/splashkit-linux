const utils = require('../../utils')
const home = process.env.HOME

execute = function (argv, callback) {
  const sklibs = `${home}/.splashkit/lib`

  const userArgs = utils.argsToString(argv['original_string'])
  const skCSharpCode = `${home}/.splashkit/commands/mcs/SplashKit.cs`
  const skCSharpProgram = `${home}/.splashkit/commands/dotnet/Program.cs`

  utils.runCommand(`${dotnetArgs} dotnet ${userArgs}`, function (err, data) {
      if (err) {
          callback()
      } else {
          if ( argv["_"][1] == "new" || argv["_"][1] == "restore") {
              utils.runCommand(`mkdir -p ./lib; ln -s "${skCSharpCode}" ./lib/SplashKit.cs; cp "${skCSharpProgram}" .`, function (err1, data) {
                  if (err1) {
                      callback(null, "I couldn't add in the SplashKit library... 😟 -- ${err1}")
                  } else {
                      callback(null, '🎉  dotnet command ran successfully 🎉')
                  }
              })
          }
          else {
            callback(null, '🎉  dotnet command run successfully 🎉')
          }
      }
  })
}

 module.exports = {
  execute : execute
}
