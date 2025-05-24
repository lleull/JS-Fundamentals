const args = process.argv.slice(2);

if (args.length < 1) {
  console.log(`undefined is undefined`);
} else if (args.length == 1) {
  console.log(`${args.slice(0, 1)} is undefinedZ`);
} else {
  console.log(args.slice(0, 2).join(" is "));
}
