// console.log(Math.floor(Math.random)*6)+1;

function generateval(y,x){
    // console.log(`${Math.floor(Math.random()*(x-y)+y)}`)
    console.log(Math.floor(Math.random()*(x-y+1)+y));
}

console.log(generateval(2,9));