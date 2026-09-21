---
sort: 1
---

# Java Methods

A method is a named block of code that runs when it is called. Methods help
organize a program into reusable parts.

## Define and call a method

Declare a method inside a class. A method can take parameters and can return a
value:

```java
static int add(int first, int second) {
  return first + second;
}

public static void main(String[] args) {
  int total = add(3, 4);
  System.out.println(total); // 7
}
```

`static` methods belong to the class and can be called without creating an
object. Instance methods are called on an object.

## Parameters and return values

Parameters are variables in a method declaration. Arguments are the values
passed when the method is called. Use a return type such as `int` when a method
returns a value, or `void` when it does not.

## Method overloading

You can define multiple methods with the same name when their parameter lists
differ. Java chooses the matching method based on the number, types, and order
of the arguments.

```java
static int multiply(int number, int factor) {
  return number * factor;
}

static double multiply(double number, double factor) {
  return number * factor;
}
```

## Further reading

- [W3Schools: Java Methods](https://www.w3schools.com/java/java_methods.asp)
- [W3Schools: Java Method Parameters](https://www.w3schools.com/java/java_methods_param.asp)
- [W3Schools: Java Method Overloading](https://www.w3schools.com/java/java_methods_overloading.asp)
