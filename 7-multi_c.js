const args = process.argv.slice(2);
const data = "C is fun";

if (args.length < 1) {
  console.log("Missing number of occurrences");
} else {
  const count = Number(args[0]);

  if (isNaN(count)) {
    console.log("Not a number");
  } else {
    for (let i = 0; i < count; i++) {
      console.log(data);
    }
  }
}
