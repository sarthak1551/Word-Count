const fs = require("fs");
fs.readFile("./test.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let words = data.toLowerCase().trim().replace(/\./g, "").split(" ");
  let count = [];
  let unique_words = [];
  for (let i = 0; i < words.length; i++) {
    if (unique_words.indexOf(words[i]) >= 0) {
      count[unique_words.indexOf(words[i])] = count[unique_words.indexOf(words[i])] + 1;
    } else {
      unique_words.push(words[i]);
      count[unique_words.indexOf(words[i])] = 1;
    }
  }
  let newArr = [];
  unique_words.forEach((word, i) => {
    newArr.push({ word: word, count: count[i] });
  });
  newArr.sort((a, b) => {
    return b.count - a.count;
  });
  newArr.forEach((element) => {
    console.log(element.word + " " + element.count + "\n");
  });
});
