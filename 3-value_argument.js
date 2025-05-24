const args = process.argv.slice(2);

if (args.length < 2) {
  console.log("undefined is undefined");
} else {
  // Take the first two arguments and join them with ' is '
  const result = args.slice(0, 2).join(" is ");
  console.log(result);
}
