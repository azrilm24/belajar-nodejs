const validator = require("validator");
const chalk = require("chalk");
// const email = "anom@gmail.com";
// console.log(validator.isEmail(email));
// console.log(validator.isMobilePhone("08879848484", "id-ID"));
// console.log(validator.isNumeric("872323"));

// chalk
// console.log(chalk.cyan.bgGreen.underline("hello world!"));
// console.log(chalk.bgCyan.red("hello world!"));
// console.log(chalk.bold("hello world!"));
// console.log(chalk.italic("hello world!"))
// console.log(chalk.underline("hello world!"));
// console.log(chalk.underline("hello world!"));

const pesan = chalk`lorem ipsum {bgBlue.green dolor} smolong smeng {strikethrough smaong} mongak`;

console.log(pesan);
