const h1 = document.querySelector('h1');
console.log(h1)

let counter =0;

function increase(){
    counter++;
    h1.textContent = counter;
}

setInterval( increase , 1000);
