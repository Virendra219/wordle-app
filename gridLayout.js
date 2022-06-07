// function moveToNext(current, nextFieldID) {
//   if (current.value.length == 1) {
//     current.value = current.value.toUpperCase();
//     document.getElementById(nextFieldID).focus();
//     l = (l==5) ? 5 : l+1;
//   }
// }

var w = 1, l = 1;
const grid = document.createElement("div");
grid.className = "grid";
document.body.appendChild(grid);
// const arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
for (let j = 1; j < 7; j++) {
  const word = document.createElement("div");
  word.className = "word";
  let id = "word" + j;
  word.id = id;
  for (let i = 1; i < 6; i++) {
    const cell = document.createElement("div");
    cell.type = Text;
    cell.className = "cell";
    let curID = "w" + j + "-l" + i;
    cell.id = curID;
    cell.maxLength = 1;
    // cell.style = "text-transform: uppercase";
    word.appendChild(cell);
  }
  grid.appendChild(word);
}

// for (let j = 1; j < 7; j++) {
//   for (let i = 1; i < 6; i++) {
//     let nextID = "w" + j + "-l" + (i == 5 ? i : i + 1);
//     let curID = "w" + j + "-l" + i;
//     const input = document.getElementById(curID);
//     input.onkeyup = function() {moveToNext(input, nextID)};
//   }
// }

