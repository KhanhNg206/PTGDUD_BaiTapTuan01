const countMoney = [125, 555, 44];
const tips = [];
const countValues = [];

const calcTip = (money) => {
    const tip = (money >= 50 && money <= 300) ? money * 0.15 : money * 0.2;
    tips.push(tip);
    countValues.push(money + tip);
    return tip;
};

for (let bill of countMoney) {
    calcTip(bill);
}

console.log(tips);
console.log(countValues);
