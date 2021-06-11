let field = document.querySelector("#field");
let coord = field.getBoundingClientRect();

let leftTopOutside = [Math.floor(coord.left), Math.floor(coord.top)];
let rightBottomOutside = [Math.floor(coord.right), Math.floor(coord.bottom)];
let leftTopInside = [
  Math.floor(coord.left) + field.clientLeft,
  Math.floor(coord.top) + field.clientTop,
];
let rightBottomInside = [
  Math.floor(coord.left) + field.clientLeft + field.clientWidth,
  Math.floor(coord.top) + field.clientTop + field.clientHeight,
];

console.log(leftTopOutside);
console.log(rightBottomOutside);
console.log(leftTopInside);
console.log(rightBottomInside);
