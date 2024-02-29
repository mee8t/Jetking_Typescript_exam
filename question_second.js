function find_maximum(element1, element2, element3) {
    var max = element1;
    if (element2 > element3) {
        max = element2;
    }
    if (element3 > max) {
        max = element3;
    }
    return max;
}
var num1 = 20;
var num2 = 85;
var num3 = 25;
console.log("the manimum of ".concat(num1, ",").concat(num2, ",").concat(num3, " is ").concat(find_maximum(num1, num2, num3)));
