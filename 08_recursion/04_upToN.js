// printing numbers from and upto N
// Eg. for input 4, print 1 2 3 4 and 4 3 2 1

/* 
   BOTTOM to TOP approach : first printing greater value
   then samller value

   5 4 3 2 1

   We are checking base case then printing value of n
   Then we are recursively calling the function with n - 1
*/
function printDESC(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printDESC(n - 1);
}

/* 
   TOP to BOTTOM approach: first printing smaller value
   then greater value

   1 2 3 4 5
   
   We are checking base case then 
   We are recursively calling the function with n - 1
   Then printing value of n
*/
function printASC(n) {
  if (n === 0) {
    return;
  }
  printASC(n - 1);
  console.log(n);
}

printASC(5);
console.log('');
printDESC(5);
