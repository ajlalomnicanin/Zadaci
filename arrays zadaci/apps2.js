// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

function first(color, o) {
  let noviNiz = [];
  for (let i = 0; i < color.length; i++) {
    let numnastavci = i + 1 > 3 ? o[0] : o[i + 1];
    celokupno = [i + 1] + numnastavci + " choice is " + color[i];
    noviNiz.push(celokupno);
  }
  return noviNiz;
}
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th", "st", "nd", "rd"];

console.log(first(color, o));
