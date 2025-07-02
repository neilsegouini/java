function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
    if(arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

// Example usage:
const numbers = [3, 4, 10, 25, 7, 2, 8];
const result = findMinMax(numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);

VM110:20 Minimum: 2
VM110:21 Maximum: 25
undefined
