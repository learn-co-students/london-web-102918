const arr = [2,3,4,5]

reduce = function (collection, callback, acc=0) {
  // Acc (short for accumulator) starts as the initial state of the reduction,
  //and with each successive step it should be accumulate the return value of callback.

  for (val of collection) {
    acc = callback(acc, val, collection)
  }

  //The callback is passed three arguments: the acc, the current value in our iteration (the element in the array and finally a reference to the entire collection.
  return acc
}

console.log(reduce(arr))
