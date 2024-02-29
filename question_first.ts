function to_check_odd_even (Num_ber:number): string {
    if(Num_ber % 2 ===0) {
       return "even";
         }
      else {
         return "odd";
}
}

const even_number_to_check = 24;
const result = to_check_odd_even ( even_number_to_check);
console.log(`${ even_number_to_check} is an$ {result} number`);
   

const odd_number_check = 19;
const result1 = to_check_odd_even( odd_number_check );
console.log(`${odd_number_check} is an ${result1} number`);
