let tomb = [];

for (let i = 0; i < 10; i++){
    tomb.push(randomInt(1, 100));
}
tomb.sort((a,b) => a-b);
tomb.forEach(elem => console.log(elem));

function randomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}