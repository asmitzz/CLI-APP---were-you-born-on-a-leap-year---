var readlineSync = require('readline-sync');
var chalk = require('chalk');

var username = readlineSync.question(chalk.yellow('Enter your name : '));

var loop = true;

while(loop){
  var DOB = readlineSync.question(chalk.yellow('\nEnter your date of birth in this format '+chalk.yellowBright('( DD/MM/YYYY ) : ')  ));

  var year = parseInt(DOB.slice(6,10));
  var date = parseInt(DOB.slice(0,2));
  var mon = parseInt(DOB.slice(3,5));
   
   if( date.toString().length === 2 && mon.toString().length <= 2 && year.toString().length === 4 ){
       if(!isNaN(date) && !isNaN(mon) && !isNaN(year)){
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
             console.log(chalk.green('\nCongratulations, You are born on a leap year'));
             console.log(chalk.blue('Share this on social media'));
             }
             else{
            console.log(chalk.red('\nSorry')+chalk.red(',You are not born on a leap year'));
            }
       }
   }
      else{
       console.log(chalk.red('Wrong input format!! Please enter a right DOB format'));
      }
   }
  else{
       console.log(chalk.red('Wrong input format!! Please enter a DOB in this ( DD/MM/YYYY ) format'));
  }
   

}
