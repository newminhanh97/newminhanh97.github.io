---
sort: 2
---

# Java Scope

Scope is the part of a program where a variable is declared and can be used.
The scope of a variable depends on where it is declared: inside a method, in a
block, or as a field of a class.

## Method Scope

Variables declared directly inside a method are available anywhere in the method following the line of code in which they were declared

## Block scope

- A block of code refers to all of the code between curly braces `{ }`.

- Variables declared inside a block of code are only accessible by the code between the curly braces, and only after the line in which the variable was declared.

- A block of code can stand alone, or be part of an `if`, `while`, or `for` statement. In a `for` loop, the variable declared in the loop header (like `int i = 0`) only exists inside the loop. Once the loop ends, `i` is destroyed, so you can't use it outside.

## Class scope: fields

A field is declared in a class but outside its methods. Instance fields belong
to each object; static fields belong to the class. Methods can use fields that
are in scope for them:

```java
class Counter {
  private int count = 0;       // instance field
  private static int total = 0; // class field

  void increment() {
    count++;
    total++;
  }

  static int getTotal() {
    return total;
  }
}
```

An instance method can use both instance and static fields. A static method,
such as `getTotal`, can use static fields directly, but needs an object to
access an instance field.

## Scope and access modifiers

Scope describes where a variable is available in the code. Access modifiers
such as `private` and `public` control whether class members can be accessed
from other classes. They are related, but they describe different rules:
declaring a field in a class does not make a `private` field accessible from
everywhere.

Keep local variables in the smallest block that needs them. Narrow scopes make
code easier to read and reduce accidental reuse or changes.

## Further reading

- [W3Schools: Java Scope](https://www.w3schools.com/java/java_scope.asp)
