const romanToInt = function (s) {
  //Start coding here
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
      total -= roman[s[i]];
    } else {
      total += roman[s[i]];
    }
  }
  return total;
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
