export function filterArray(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    console.log('log');
    if (callback(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
