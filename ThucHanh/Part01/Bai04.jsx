const countMoney = [275, 40, 430];
for (let bill of countMoney) {
  const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
  const total = bill + tip;

  console.log(`Hóa đơn là ${bill}, tiền boa là ${tip}, tổng giá trị là ${total}`);
}
