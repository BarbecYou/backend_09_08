let tomb = [];

for(let i = 0; i < 20; i++){
    tomb.push({
        nev: `Cirmos ${i + 1}`,
        eletkor: randomInt(2, 11),
    });
}

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

tomb.forEach(e => e.eletkor == 2 ? console.log(e) : 1);