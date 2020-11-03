const chalk = require("chalk");
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding("utf8");

console.log(chalk.blue.bold("Welcome to the Alarm program!"));
console.log("-----------------------------");
console.log(chalk.green("Press b to test Alarm and ctrl-c to exit"));
console.log("Press any key from 1 to 9 to set alarm in seconds!");

let i = 0;
let secondsCountDown = 0;
const alarm = (seconds) => {
  setTimeout(function () {
    secondsCountDown--;
    console.log(
      `${seconds} second timer with ${secondsCountDown} seconds left!`
    );
    i++;
    if (i < seconds) {
      alarm(seconds);
    } else {
      process.stdout.write("\x07");
      console.log(chalk.red("Beeeeeeeeeeeep!"));
    }
  }, seconds * 1000);
};

const timerMessage = (seconds) => {
  console.log(`${seconds} second timer initiated!`);
};

stdin.on("data", function (key) {
  if (key === "\u0062") {
    process.stdout.write("\x07");
    process.stdout.write(chalk.red("Testing Alarm Sound!\n"));
  }
  if (key === "\u0031") {
    i = 0;
    secondsCountDown = 1;
    timerMessage(1);
    alarm(1);
  }
  if (key === "\u0032") {
    i = 0;
    secondsCountDown = 2;
    timerMessage(2);
    alarm(2);
  }
  if (key === "\u0033") {
    i = 0;
    secondsCountDown = 3;
    timerMessage(3);
    alarm(3);
  }
  if (key === "\u0034") {
    i = 0;
    secondsCountDown = 4;
    timerMessage(4);
    alarm(4);
  }
  if (key === "\u0035") {
    i = 0;
    secondsCountDown = 5;
    timerMessage(5);
    alarm(5);
  }
  if (key === "\u0036") {
    i = 0;
    secondsCountDown = 6;
    timerMessage(6);
    alarm(6);
  }
  if (key === "\u0037") {
    i = 0;
    secondsCountDown = 7;
    timerMessage(7);
    alarm(7);
  }
  if (key === "\u0038") {
    i = 0;
    secondsCountDown = 8;
    timerMessage(8);
    alarm(8);
  }
  if (key === "\u0039") {
    i = 0;
    secondsCountDown = 9;
    timerMessage(9);
    alarm(9);
  }
  if (key === "\u0003") {
    console.log(chalk.green("Thanks for using me, ciao!"));
    process.exit();
  } // ctrl-c
});
