function a() {
    myvar = 2;
    console.log(myvar);
    b();
}

var myvar = 3;
console.log(myvar);
a();
console.log(myvar);

function b() {
    myvar = 4;
    console.log(myvar);
}