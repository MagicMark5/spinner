const spinner = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\";
let timer = 0;
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, timer); 
  timer += 100;
};
setTimeout(() => process.stdout.write("\n"), 2400);