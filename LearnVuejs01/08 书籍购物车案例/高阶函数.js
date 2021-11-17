const nums = [10, 20, 30, 100, 200, 40, 50]
// 1 filter函数的使用
// let newNums = nums.filter(function (n) {
//   return n < 100
// })
// console.log(newNums)

// 2 map函数的使用
// let new2Nums = newNums.map(function (n) {
//   return n * 2
// })
// console.log(new2Nums)

// 2 reduce函数的使用
// let total = newNums.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n)
console.log(total)