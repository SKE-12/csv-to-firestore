
const USER_PATH = process.cwd()

module.exports = configPath => {
    if (!configPath) throw new ReferenceError('Config File is NOT FOUND!!!')
    const spinner = require('ora')().start('Loading Config File...')
    const config = require(`${USER_PATH}/${configPath}`)
    spinner.succeed('Config File is ready !')
    return config
}
