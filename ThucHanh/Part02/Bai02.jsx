const countMoney = [125, 555, 44];
const tips = [];
const countValues = [];
const calTip = (money) => {
    const tip = (money >= 50 && money <= 300) ? money * 0.15 : money * 0.2;
    const countValue = money + tip;
    tips = [...tips,tip];
    countValues = [...countValues,countValue]
    return tip;
}

for (let bill of countMoney) {
   calTip(bill)
   console.log(tips)
   console.log(countValues)
    console.log(countValues)
}

// chưa xong



