const Juliadata_01 = [3, 5, 2, 12, 7]
const Katedata_01 = [4, 1, 15, 8, 3] 
const Juliadata_02 = [9, 16, 6, 8, 3]
const Katedata_02 = [10, 5, 6, 1, 4] 

function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);

  const allDogs = dogsJuliaCorrected.concat(dogsKate);

  allDogs.forEach((age, i) => {
    if (age >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy `);
    }
  });
}

checkDogs(Juliadata_01,Katedata_01);
checkDogs(Juliadata_02,Katedata_02);