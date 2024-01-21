
/* In JavaScript, loops work similarly to other programming languages, but there are some syntax differences. Here, I'll cover the two main types of loops in JavaScript: the for loop and the while loop.

1. For Loop in JavaScript:
The syntax for a for loop in JavaScript is as follows:

*/

// for (initialization; condition; increment/decrement) {
//     // code to be executed in each iteration
// }


// Print numbers from 1 to 5 using a for loop
console.log("for loop output ");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("\n");

/* 2. While Loop in JavaScript:
The syntax for a while loop in JavaScript is as follows:

*/

// while (condition) {
//     // code to be executed as long as the condition is true
// }



// Print numbers from 1 to 5 using a while loop
console.log("while loop output ");
let counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}
console.log("\n");


// Loop Control Statements in JavaScript:
// Break Statement:

// The break statement is used to exit the loop prematurely, regardless of whether the loop condition is still true.
console.log("for loop add in breck stetment ");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log("\n");
// Continue Statement:

// The continue statement is used to skip the rest of the code inside the loop 
// for the current iteration and move on to the next iteration.

console.log("for loop and countinue stetment ");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i," ");
}

console.log("\n");

// and last one is do-while loop thees loop atlest exicuteded one time either condition false or true 

// syntax
console.log("do while loop output  ");
do{

    console.log("i am thair");

}while(false);