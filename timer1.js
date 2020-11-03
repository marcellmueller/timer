const args = process.argv.slice(2);

const removeNonNumbers = () => {
  let newArray = [];
  //convert args to integers using .map
  const arr = args.map(Number);

  //loop through new array to filter non numbers
  for (const each of arr) {
    //check if each is a number and is greater than zero
    if (Number.isInteger(each) && each > 0) {
      newArray.push(each);
    }
  }
  return newArray;
};

//call for new array filtered to have only numbers
const seconds = removeNonNumbers(args);
const alarms = removeNonNumbers(args);

const setAlarms = (alarms) => {
  for (let i = 0; i < alarms.length; i++) {
    setTimeout(() => {
      //process.stdout.write('\x07'); wasn't beeping
      process.stdout.write("*");
      console.log(`Alarm ${i}: ${seconds[i]} seconds`);
    }, alarms[i] * 1000);
  }
};

setAlarms(alarms);
