function test() {
    var a = "3";
    var b = "8";
    
/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:
// a = "8"
// b = "3"
////////////// Or
// var c = "8"
// a = c
// var d = "3"
// b = d
////////////// Or

var c = a
a = b
b = c

/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}


test()