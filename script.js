'use strict';

function printForecast(arr) {
  let str = '';
  for (let i = 1; i <= arr.length; i++) {
    str = str + `... ${arr[i - 1]}°C  in ${i} days `;
  }
  console.log(str);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
