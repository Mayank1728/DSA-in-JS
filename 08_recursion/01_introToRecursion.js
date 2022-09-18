/*
  Recursion   
  1. BASE CASE 
  2. RECURSIVE CALL (function calling itself with DIFFERENT Value)
  3. RETURN STATEMENT (just having base case isn't enough you need
                        to return value when you reach base case.)
  
  Lets say 20 students are sitting in a column and you are at the last.
  Everyone is stuck on one question. 
  
  The teacher says "your answer will be 1 more than the answer of the 
  student sitting in front of you."
  
  So you think let me just ask 19th student his answer and then I will 
  just add 1 to his answer.
  so you ask 19th student

  Now the 19th student thinks "my answer will be +1 of answer of 18th student"
  so he asks 18th student

  Now the 18th student thinks "my answer will be +1 of answer of 17th student"
  so he asks 17th student

  Now the 17th student thinks "my answer will be +1 of answer of 16th student"
  so he asks 16th student

  And so on...

  Now the 2nd student thinks "my answer will be +1 of answer of 1st student"
  so he asks 1st student

  Thankfully 1st student has the answer. He says/RETURNS 1.

  Now 2nd student RETURNS his answer = 1(1st student's answer) + 1 = 2

  Now 3rd student RETURNS his answer = 2(2nd student's answer) + 1 = 3

  Now 4th student RETURNS his answer = 3(3rd student's answer) + 1 = 4

  so on..

  Now 19th student RETURNS his answer = 18(18th student's answer) + 1 = 19

  Now you student get you answer = 19(19th student's answer) + 1 = 20

  This is recursion.

  1. Here 1st student returns 1 which is BASE CASE. If 1st student
      didn't knew his answer, all of the students would be stuck
  2. Every student needed to DO THE SAME THING - add 1 to previous student's
      answer to get his answer.
      AKA Recursive call.
  3. REMEMBER TO RETURN when you reach the base case. SO that the function
    will stop calling itself.

  BASE CASE, RECURSIVE CALL(function calling itself with new value), RETURN STATEMENT


*/
