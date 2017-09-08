
for (let i = 5; i >= 0; i--) {
    console.log("Hello, several times: " + i);
}

for (let i = 1; i <= 4; i++) {
    let line: string = "*";
    line = line.repeat(i);
    console.log(line);
}

let a = 1;

while(a < 5) {
    let line: string = "*";
    line = line.repeat(a);
    console.log(line);
    a++;
}

console.log("Some modificiation");