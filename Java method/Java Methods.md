---
sort: 1
---

# Java Methods

- A `method` is a block of code which only runs when it is called. Methods are used to perform certain actions.

- Why use methods? To reuse code: define the code once, and use it many times.

## Create a Method
A method must be declared within a class. It is defined with the name of the method, followed by parentheses `()`.

A method declaration includes:
- a modifier (when needed) 
- a return type (not `void`: `void` means that this method does not have a return value) 
-  method's name followed by two parentheses `()` and a semicolon`; `
- parameters in parentheses (a method can have/ have no parameter)
- and a body

## Method parameters

- Parameters are variables inside the method. Parameters are specified after the method name, inside the parentheses.Multiple parameters are separated by a comma `,`.

- When a `parameter` is passed to the method, it is called an `argument`. Arguments must match the parameters in number, order, and compatible types.

## Return values

- If you want the method to return a value, you can use a `primitive data type (such as int, char, etc.)`, and use the `return` keyword inside the method. The returned value matches the declared type.

- Use `void` when the method does not return a value.


## Method overloading

- With method overloading, `multiple methods` can have the `same name with different parameters` (different types or different number of parameters).

- Instead of defining two methods that should do the same thing, it is better to overload one.

```java
class Calculator {
  static int multiply(int number, int factor) {
    return number * factor;
  }

  static double multiply(double number, double factor) {
    return number * factor;
  }

  public static void main(String[] args) {
    System.out.println(multiply(3, 4));       // 12
    System.out.println(multiply(2.5, 4.0));   // 10.0
  }
}
```

## Further reading

- [W3Schools: Java Methods](https://www.w3schools.com/java/java_methods.asp)
- [W3Schools: Java Method Parameters](https://www.w3schools.com/java/java_methods_param.asp)
- [W3Schools: Java Method Return](https://www.w3schools.com/java/java_methods_return.asp)
- [W3Schools: Java Method Overloading](https://www.w3schools.com/java/java_methods_overloading.asp)
