const symbols = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
i = 0;
for (let time = 100; time <= 1700; time += 200) {
  setTimeout(() => {
    process.stdout.write(`\r${symbols[i]}`)
    i++;
  }, time)
};