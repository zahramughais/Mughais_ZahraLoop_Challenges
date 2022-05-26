// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
for (let i = 1; i < 20; i++){
    if (i % 2 == 1){
        console.log(i);
    }
}
// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
for(let x = 100; x > 0 ; x--){
    if (x % 3 == 0){
        console.log(x);
    }
}
// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
let y = 4;
while(y >= -3.5){
    console.log(y);
    y -= 1.5;
}

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end 
// console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
let sum = 0 ;
for(let z = 1; z <= 100; z++){
    sum +=z;
}
console.log(sum);

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log 
// the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
let product = 1;
for(let m = 1; m <= 12; m++){
    product *= m;
}
console.log(product);