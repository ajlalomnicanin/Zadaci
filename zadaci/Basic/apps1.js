// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function date() {
  let trdatum = new Date();
  let godina = trdatum.getFullYear();
  let mesec = trdatum.getMonth() + 1;
  let dan = trdatum.getDate();

  //   if (mesec < 10) {
  //     mesec = "0" + mesec;
  //   }
  let msc = mesec < 10 ? "0" + mesec : mesec;
  let dn = dan < 10 ? "0" + dan : dan;

  let first = msc + "-" + dn + "-" + godina;
  return first;
}
console.log(date());
// Kada zelim ja neki datum

function date1(year, month, day) {
  let datum = new Date(year, month, day);
  // let godina = datum.setFullYear(year);
  // let mesec = datum.setMonth(month);
  // let dan = datum.setDate(day);

  let godina = datum.getFullYear();
  let mesec = datum.getMonth();
  let dan = datum.getDate();

  let datum1 = godina + "-" + mesec + "-" + dan;
  datum1 = godina + "/" + mesec + "/" + dan;
  return datum1;
}
console.log(date1(2018, 3, 6));

