---
sort: 7
navTitle: Java Enum & Anonymous Classes
---

# Java Enums and Anonymous Classes

## Enums

An `enum` is a special "class" that represents a group of **constants** (unchangeable variables, like final variables).

To create an `enum`, use the `enum` keyword, and separate the constants with a comma. Note that they should be in uppercase letters

Enum is short for "enumerations", which means "specifically listed".

You can also have an enum:
- Enum inside a Class
- Enum in a Switch Statement
- Loop Through an Enum

**Difference between Enums and Classes**
- An `enum` can, just like a `class`, have attributes and methods. The only difference is that enum constants are `public`, `static` and `final` (unchangeable - cannot be overridden).

- An `enum` cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).

**Why And When To Use Enums?**
- Use enums when you have values that you know aren't going to change, like month days, days, colors, deck of cards, etc.


## Enum Constructor

**Enum Constructor**
An enum can also have a constructor just like a class.

The constructor is called automatically when the constants are created. You cannot call it yourself.

Here, each constant in the enum has a value (a string) that is set through the constructor:
```java
enum Level {
  // Enum constants (each has its own description)
  LOW("Low level"),
  MEDIUM("Medium level"),
  HIGH("High level");

  // Field (variable) to store the description text
  private String description;

  // Constructor (runs once for each constant above)
  private Level(String description) {
    this.description = description;
  }

  // Getter method to read the description
  public String getDescription() {
    return description;
  }
}

public class Main {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM; // Pick one enum constant
    System.out.println(myVar.getDescription()); // Prints "Medium level"
  }
}
```
Note: The constructor for an enum **must be private**. If you don't write `private`, Java adds it automatically.

You can also loop through the constants and print their values using the values() method


## Further reading

- [W3Schools: Java Enums](https://www.w3schools.com/java/java_enums.asp)
- [W3Schools: Java Enum Constructor](https://www.w3schools.com/java/java_enum_constructor.asp)
