const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (dogAge) => {
  let dogAgeAfterCal = [];
  let dogAgeAdult = 0;
  let humanAge = 0;

  for (let i = 0; i < dogAge.length; i++) {
    humanAge = dogAge[i] <= 2 ? 2 * dogAge[i] : 16 + dogAge[i] * 4;

    if (humanAge >= 18) {
      dogAgeAfterCal.push(humanAge);
    }
  }

  for (let i = 0; i < dogAgeAfterCal.length; i++) {
    dogAgeAdult += dogAgeAfterCal[i];
  }

  const dogAgeAdultAverage = dogAgeAdult / dogAgeAfterCal.length;

  console.log(dogAgeAdultAverage);
};

calcAverageHumanAge(Data1);
calcAverageHumanAge(Data2);
