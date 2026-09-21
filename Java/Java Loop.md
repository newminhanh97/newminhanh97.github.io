---
sort: 10
---

# Java Loop
Loops can execute a block of code as long as a specified condition is true.

Loops are handy because they save time, reduce errors, and they make code more readable.

## Java While Loop

### `while` Loop

The `while` loop repeats a block of code as long as the specified condition is `true`

```java
while (condition) {
  // code block to be executed
}

// Ex:
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```

- Note: Do not forget to increase the variable used in the condition (i++), otherwise the loop will never end!

### `do-while` loop

The `do/while` loop is a variant of the while loop. This loop will execute the code block `once`, before checking if the condition is `true`. Then it will repeat the loop as long as the condition is `true`.

Syntax
```java
do {
  // code block to be executed
}
while (condition);

// Ex: 
int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i < 5);
```

Note: 
- The semicolon ; after the while condition is required!. 
- Do not forget to increase the variable used in the condition (i++), otherwise the loop will never end!

#### Condition is False from the Start
- In the `while` loop chapter, if the condition is `false` at the beginning, the loop never runs at all.

- The `do/while` loop is different: it will always run the code block `at least once`, even if the condition is `false` from the start.

Summary: 
- A `do/whil`e loop always runs at least once, even if the condition is `false` at the start. This is the key difference from a `while` loop, which would skip the code block completely in the same situation.

- This behavior makes `do/while` useful when you want something to happen at least once, such as showing a message or asking the user for input.


## Java For Loop

### `for` Loop
When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop

Syntax
```java
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

// Ex:
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```
- Statement 1 is executed (one time) before the execution of the code block.
- Statement 2 defines the condition for executing the code block.
- Statement 3 is executed (every time) after the code block has been executed.

Just like a while loop, a for loop may also never run. If the condition is false right from the start, the code inside the loop will be skipped entirely

#### Nested Loops
It is also possible to place a loop inside another loop. This is called a nested loop.

The "inner loop" will be executed one time for each iteration of the "outer loop".

Nested loops are useful when working with tables, matrices, or multi-dimensional data structures

```java
// Outer loop
for (int i = 1; i <= 2; i++) {
  System.out.println("Outer: " + i); // Executes 2 times
  
  // Inner loop
  for (int j = 1; j <= 3; j++) {
    System.out.println(" Inner: " + j); // Executes 6 times (2 * 3)
  }
}
```

#### The `for-each` Loop
There is also a `"for-each"` loop, which is used exclusively to loop through elements in an `array (or other data structures)`.

Syntax
```java
for (type variableName : arrayName) {
  // code block to be executed
}
```

## Further reading

- [W3Schools: Java While Loop](https://www.w3schools.com/java/java_while_loop.asp)
- [W3Schools: Java Do/While Loop](https://www.w3schools.com/java/java_while_loop_do.asp)



