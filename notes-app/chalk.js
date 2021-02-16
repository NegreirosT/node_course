const chalk = require('chalk');
const validator = require('validator');

const validateEmail = (email) => {
  return (validator.isEmail(email))? 
          console.log(chalk.black.bold.bgGreen('Success!')) : 
          console.log(chalk.bgRed('Wrong!'));
}

validateEmail('thiago@thiago.com.br');
validateEmail('thiago.com.br');
