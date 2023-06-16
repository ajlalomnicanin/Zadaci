// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function showTime() {
  // Trenutno vreme i datum
  let date = new Date();

  //   dobijanje dana iz objekta datum
  let days = [
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Cetvrtak",
    "Petak",
    "Subota",
    "Nedelja",
  ];
  let day = days[1];
  console.log(`Danas je: ${day}`);
  //   vreme
  desiredTime = new Date();
  desiredTime.setHours(22);
  desiredTime.setMinutes(30);
  desiredTime.setSeconds(38);

  let desiredTimeFormatted = desiredTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log("Zadato vreme je: " + desiredTimeFormatted);
}
showTime();

//   date.setDate(15);
//   console.log(date);
//   console.log(desiredTime.toLocaleString());
