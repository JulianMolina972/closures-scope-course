// function moneyBox (coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`Money box: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);
// moneyBox(5);



function myMoneyBox() {
  let saveCoins = 0;
  return function countCoins(coins) {
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
    return saveCoins;
  }
}

const myMoney = myMoneyBox();
myMoney(5);
myMoney(5);
myMoney(5);

const otherMoney = myMoneyBox();

otherMoney(300);
otherMoney(400);