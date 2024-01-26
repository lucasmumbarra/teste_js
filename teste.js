 const input1 = "fun&!! time";
 const input2 = "He love5 dogss";

console.log(longestWord(input1));
console.log(longestWord(input2));

 function longestWord(sen) {
  const regex = /[^a-zA-Z0-9]+/g;
  const replaceString = sen.replace(regex, " ");
  const splitString = replaceString.split(" ");
  const result = splitString.reduce((a, b) => a.length >= b.length ? a : b);
  return result;
 }