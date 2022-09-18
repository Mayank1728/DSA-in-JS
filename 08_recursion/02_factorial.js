function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));

/*
  
  What is 5! ?
   5 * 4 * 3 * 2 * 1
         OR
 
  What is 5! ?
   5 * 4!
   
      What is 4! ?
          4 * 3!

            What is 3! ?
               3 * 2!

                 What is 2! ?
                    2 * 1!

                       What is 1! ?
                         1(base case)
                       returns 1

                 returns 2 * 1 = 2

            returns 3 * 2 = 6

      returns 4 * 6 = 24

    returns 5 * 24 = 120
                        

 */
