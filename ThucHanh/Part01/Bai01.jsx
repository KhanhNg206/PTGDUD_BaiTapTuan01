const caclBMI = (weight,height) => {
    return weight / (height ** 2);
}

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95

const markBMI = caclBMI(markWeight,markHeight);
const johnBMI = caclBMI(johnWeight,johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(`BMI of mark : ${markBMI.toFixed(2)}`)
console.log(`BMI of john : ${johnBMI.toFixed(2)}`)
console.log(`BMI of mark higher BMI of john : ${markHigherBMI}`)