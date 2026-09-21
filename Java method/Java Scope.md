---
sort: 2
---

# Java Scope

Scope determines where a variable can be accessed in a program. A variable is
available only within the block or class where it is declared.

## Method scope

A variable declared inside a method is local to that method. It can be used
only after its declaration and before the method ends.

```java
static void printMessage() {
  String message = "Hello";
  System.out.println(message);
}
```

## Block scope

Variables declared inside a block, such as an `if` statement or loop, are
available only within that block:

```java
if (true) {
  int count = 1;
  System.out.println(count);
}
// count is not available here
```

## Class scope

Fields are declared in a class and can be accessed by its methods. Instance
fields belong to an object; `static` fields belong to the class.

```java
class Counter {
  private int count = 0;

  void increment() {
    count++;
  }
}
```

Keep variables in the narrowest scope that supports their use. This makes
programs easier to understand and helps prevent accidental changes.

## Further reading

- [W3Schools: Java Scope](https://www.w3schools.com/java/java_scope.asp)
