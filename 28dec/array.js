const points = [40, 100, 1, 5, 25, 10];
function myFunction() {
  for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }}
  console.log( points);

  const numb = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(numb[0]);


const points1 = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
console.log(myArrayMax(points1));

const points2 = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
console.log(myArrayMin(points2));

