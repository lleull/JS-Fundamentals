const args = process.argv.slice(2);

for (let arg of args) {
  const num = Number(arg);
  if (isNaN(num)) {
    console.log("Not a number");
  } else {
    console.log(`My number: ${num}`);
  }
}
