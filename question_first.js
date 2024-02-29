function to_check_odd_even(Num_ber) {
    if (Num_ber % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
var even_number_to_check = 24;
var result = to_check_odd_even(even_number_to_check);
console.log("".concat(even_number_to_check, " is an$ {result} number"));
var odd_number_check = 19;
var result1 = to_check_odd_even(odd_number_check);
console.log("".concat(odd_number_check, " is an ").concat(result1, " number"));
