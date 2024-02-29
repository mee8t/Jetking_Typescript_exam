function find_maximum (element1:number,element2:number,element3:number):number{
    let max: number= element1;
    if (element2>element3){
        max = element2;
    }

    if (element3>max) {
        max = element3;
    }
       return max;
}

let num1: number =20;
let num2: number =85;
let num3: number =25;

console.log(`the manimum of ${num1},${num2},${num3} is ${find_maximum(num1,num2,num3)}`)