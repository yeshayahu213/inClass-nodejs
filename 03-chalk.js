import chalk from 'chalk'

console.log(chalk.blue.bgRedBright.underline('Hello Chalk!'))

// Combine styled and normal strings
console.log(chalk.blue('Hello') + ' Chalk' + chalk.red('!'))

// Compose multiple styles using the chainable API
console.log(chalk.blue.bgRed.bold('Hello Chalk!'))

// Pass in multiple arguments
console.log(chalk.blue('Hello', 'Chalk!', 'Foo', 'bar', 'biz', 'baz'))
// Nest styles
console.log(chalk.red('Hello', chalk.underline.bgBlue('Chalk') + '!'))

// Nest styles of the same type even (color, underline, background)
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
))