---
sort: 3
---

# Java Recursion

Recursion is when a method calls itself to solve a problem in smaller steps.
Every recursive method needs a base case that stops the calls.

```java
static int factorial(int number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

public static void main(String[] args) {
  System.out.println(factorial(5)); // 120
}
```

For `factorial(5)`, each call reduces the number until the base case is reached.
The calls then return their results in reverse order.

Make sure each recursive call moves toward the base case. Without a reachable
base case, the calls continue until the program runs out of call-stack space.
For some problems, an iterative loop can be simpler and use less stack memory.

## Further reading

- [W3Schools: Java Recursion](https://www.w3schools.com/java/java_recursion.asp)
