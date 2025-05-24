const testNumber = (number) => {
  if (!number) {
    console.log("No argument");
    return;
  } else {
    console.log("Argument found");
  }
};

console.log(testNumber());
