function sing(callback){
    console.log('sign 1 do ra me');
    if (callback){ 
    callback();
    }
}

function sign2(){
    console.log("sign2 La LA LA");
}

sing(sign2);
sing();
sing(sign2);


/*function multiply(factor) {
    return function(x){
        return x * factor;
    }
}*/

//got rid of function and () and {} second line above code replace with =>

function multiply(factor){
    return x => x * factor;
}

let double = multiply(2);
let triple = multiply(3);

console.log (double(4));
console.log (triple(6));





add = () => a + b;

let a = 1;
let b = 2;

console.log(add());