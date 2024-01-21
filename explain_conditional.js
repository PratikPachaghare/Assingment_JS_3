/* 
Conditional statements are a fundamental concept in programming that allow you to control the flow of a program based on certain conditions. These statements enable you to make decisions and execute different code blocks depending on whether a specified condition is true or false.

The most common types of conditional statements are:

*/

// if statement:
// The basic syntax of an if statement is as follows:

x = 10
if (x > 5){
    console.log("x is greater than 5");
}



/* 
if-else statement:
The if-else statement allows you to execute one block of code if the condition is true and another block if the condition is false. The syntax is as follows:
*/

y = 3
if (y % 2 == 0){
    console.log("y is even");
        }
    else{
    console.log("y is odd");
    }



/*
if-elif-else statement:
The if-elif-else statement allows you to test multiple conditions in sequence. If the first condition is true, the corresponding block of code is executed; otherwise, the next condition is checked. If none of the conditions is true, the code in the else block is executed. The syntax is as follows:  
*/    

grade = 85
if (grade >= 90){
    console.log("A")
    }
else if (grade >= 80){
    console.log("B")
    }
else if (grade >= 70){
    console.log("C")
    }
else{
    console.log("F")
}
