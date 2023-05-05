// setTimeout(() => {
//     function alertTerminal(){
//         console.log("\007");
//       }
//     process.stdout.write('\r|   --');
//   }, 1000,);

//   alertTerminal(3000, 5000, 9000, 10000, 1500)

const args = process.argv.slice(2);
const alarms = new Set();

args.forEach(arg => {
    const num = parseInt(arg);
    if (!isNaN(num) && num >=0) {
        alarms.add(num);
    }
});
const sortedAlarms = Array.from(alarms).sort((a, b) => a - b);

sortedAlarms.forEach(alarm => {
    setTimeout(() => {
        process.stdout.write('\x07')
    }, alarm * 1000)
});

console.log(`Alarms set for: ${sortedAlarms.join(' , ')} seconds`);