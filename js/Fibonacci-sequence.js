let a = 0;
let b = 1;
let c;

for(var i =0; i<=100; i++){
    console.log(a+b)
    c = a+b;
    a=b;
    b=c;
}