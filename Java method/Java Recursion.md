---
sort: 3
---

# Java Recursion

Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simpler problems which are easier to solve.

A recursive method needs two parts:

1. A **base case** that returns a result without making another recursive
   call.
2. A **recursive case** that changes the input and calls the method again,
   moving toward the base case.

## Example: countdown

This method prints a number and then calls itself with the previous number.
When it reaches zero, the base case stops the recursion:

```java
static void countDown(int number) {
  if (number == 0) { // Base case
    System.out.println("Done!");
    return;
  }

  System.out.println(number);
  countDown(number - 1); // Recursive case
}

public static void main(String[] args) {
  countDown(3);
}
```

The output is:

```text
3
2
1
Done!
```

Each call has its own `number` parameter. The calls continue until one reaches
the base case, then return in reverse order.

## Example: factorial

The factorial of a non-negative integer `n`, written `n!`, is the product of
the integers from `n` down to 1. By definition, `0!` is 1. The recursive
definition is `n! = n * (n - 1)!` for `n > 0`.

```java
static long factorial(int number) {
  if (number < 0) {
    throw new IllegalArgumentException("number must not be negative");
  }
  if (number <= 1) { // Base case: 0! and 1! are both 1
    return 1;
  }
  return number * factorial(number - 1);
}

public static void main(String[] args) {
  System.out.println(factorial(5)); // 120
}
```

For `factorial(5)`, the calls build up as:

```text
factorial(5)
5 * factorial(4)
5 * 4 * factorial(3)
5 * 4 * 3 * factorial(2)
5 * 4 * 3 * 2 * factorial(1)
5 * 4 * 3 * 2 * 1
```

When `factorial(1)` reaches the base case and returns `1`, the waiting calls
multiply their values as they return. A `long` can hold factorials only up to
`20!`; larger results overflow.

## Preventing infinite recursion

Every recursive step must make progress toward a reachable base case. If the
input never reaches the base case, calls keep adding to the call stack until
the program throws a `StackOverflowError`.

Before writing a recursive method, check:

- Is there a base case for the smallest valid input?
- Does every recursive call move closer to that base case?
- Are all valid inputs handled, including boundary values?

## Recursion and loops

Recursion can make problems that naturally split into smaller versions of
themselves easier to express. A loop may be simpler and use less call-stack
memory for tasks such as counting through a range. Choose the approach that
makes the stopping condition and progress easiest to understand.

## Further reading

- [W3Schools: Java Recursion](https://www.w3schools.com/java/java_recursion.asp)
