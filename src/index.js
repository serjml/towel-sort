
// You should implement your task here.

module.exports = function towelSort (arr) {
  if (!arr) return [];
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {    
      arr2.push(arr[i].reverse())    
    } else {
      arr2.push(arr[i])
    }
  }
  return arr2.flat()
}
