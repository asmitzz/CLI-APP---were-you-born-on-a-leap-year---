var readlineSync = require('readline-sync');
var chalk = require('chalk');

var username = readlineSync.question(chalk.yellow('Enter your name : '));

var loop = true;

while(loop){
  var DOB = readlineSync.question(chalk.yellow('\nEnter your date of birth in this format '+chalk.yellowBright('( DD/MM/YYYY ) : ')  ));

  var year = parseInt(DOB.slice(6,10));
  var date = parseInt(DOB.slice(0,2));
  var mon = parseInt(DOB.slice(3,5));
   
   if( date <= 31 && mon <= 12 && year.toString().length === 4) {
           loop = false;
           if( year % 100 === 0 ){
                 if( year % 400 === 0 ){
                 console.log(chalk.green('\nCongratulations, You are born on a leap year'));
                  console.log(chalk.blue('Share this on social  media'));
                   }
                 else{
                   console.log(chalk.red('\nSorry')+chalk.red(',You are not born on a leap year'));
                 }
            }
           else{
               if( year % 4 === 0 ){
               console.log(chalk.green('\nCongratulations, You  are born on a leap year'));
               console.log(chalk.blue('Share this on social media'));
             }
             else{
              console.log(chalk.red('\nSorry')+chalk.red(',You are not born on a leap year'));
            }
         }
   }
   else{
       if( (date > 31 && date.toString().length <= 2 )){
          console.log(chalk.red('Invalid date ! please input valid date'));
       }
       else if( (mon > 12 && mon.toString().length <=2 )  ){
          console.log(chalk.red('Invalid month ! please input valid month'));
       }
       else if(isNaN(date)){
          console.log(chalk.red('Invalid date ! please input valid date'));
       }
       else if(isNaN(mon)){
          console.log(chalk.red('Invalid month ! please input valid month'));
       }
       else if(isNaN(year)){
          console.log(chalk.red('Invalid year ! please input valid year'));
       }
       else{
         console.log(chalk.red('Invalid DOB format ! please input DOB in this format ( DD/MM/YYYY )'))
       }
    }
}
