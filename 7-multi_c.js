const args = process.argv.slice(2);
const data = "C is fun";

const count = Number(args[0]);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < count; i++) {
    console.log(data);
  }
}
