const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("NaN");
} else {
  console.log(args.reduce((a, b) => Number(a) + Number(b)));
}
