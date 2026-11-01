---
sort: 1
---

# Java OOP

OOP (stands for Object-Oriented Programming) organizes a program around objects. An object
contain both data and methods. 

OOP is ideal for building scalable, reusable, and maintainable code.

Object-oriented programming has several advantages over procedural programming:

- OOP provides a clear structure for the programs
- OOP helps to keep the Java code DRY "Don't Repeat Yourself", and makes the code easier to maintain, modify and debug
- OOP makes it possible to create full reusable applications with less code and shorter development time

Tip: The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, and place them at a single place and reuse them instead of repeating it.

## Java - What are Classes and Objects?

- `Classes and objects` are the two main aspects of OOP.

- Class is a template for objects, and an object is an instance of a class.

- When the individual objects are created, they inherit all the variables and methods from the class.
## Java Encapsulation

**Encapsulation**

The meaning of Encapsulation, is to make sure that **"sensitive" data is hidden** from users. To achieve this, you must:

- declare **private** class variables/attributes
- provide **public get and set methods** to access and update the value of a `private variable`

**Get and Set**
`private` variables can only be accessed **within the same class** (an outside class has no access to it). However, it is possible to access them if we provide public **get** and **set** methods.

The `get` method returns the variable value, and the `set` method sets the value.

**Syntax:** start with either `get` or `set`, followed by the name of the variable, with the first letter in upper case:
## Example

```java
public class Person {
  private String name; // private = restricted access

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }
}
```
## Java Inheritance

**Java Inheritance (Subclass and Superclass)**

In Java, it is possible to inherit attributes and methods from one class to another. We group the "inheritance concept" into two categories:

- **subclass** (child) - the class that inherits from another class
- **superclass** (parent) - the class being inherited from
To inherit from a class, use the `extends` keyword.

**Why And When To Use "Inheritance"?**
- It is useful for code reusability: reuse attributes and methods of an existing class when you create a new class.

**Tip:** Also take a look at the next chapter, Polymorphism, which uses inherited methods to perform different tasks.

**The final Keyword**
If you don't want other classes to inherit from a class, use the final keyword (Ex: `final` class Vehicle {})

## Java Polymorphism

**Java Polymorphism**

Inheritance lets us inherit attributes and methods from another class. Polymorphism uses methods to perform different tasks. This allows us to perform a single action in different ways.

**Why And When To Use "Inheritance" and "Polymorphism"?**

It is useful for code reusability: reuse attributes and methods of an existing class when you create a new class.

## Java Abstraction

**Java Abstraction**

Data `abstraction` is the process of **hiding certain details and showing only essential information** to the user.
Abstraction can be achieved with either `abstract classes` or `interfaces`.

The `abstract` keyword is a non-access modifier, used for classes and methods:

- **Abstract class**: is a restricted class that **cannot be used to create objects** (to access it, it must be inherited from another class).

- **Abstract method**: can only be **used in an abstract class**, and it does **not have a body**. The body is provided by the subclass (inherited from).

**Why And When To Use Abstract Classes and Methods?**
To achieve security - hide certain details and only show the important details of an object.

**Note:** Abstraction can also be achieved with `Interfaces`,

## Core OOP ideas

- **Encapsulation** keeps data and the methods that operate on it together.
  Access modifiers such as `private` control which code can access a field
  directly. Public methods can provide a controlled way to read or change it.
- **Inheritance** lets a class extend another class and reuse or specialize its
  behavior with `extends`.
- **Polymorphism** lets a parent type refer to objects of different child
  classes. Overridden methods can then provide behavior appropriate to each
  object's actual class.
- **Abstraction** exposes the essential operations of a type while hiding
  implementation details. Java supports abstraction with interfaces and
  abstract classes.

## Example

```java
class Animal {
  void makeSound() {
    System.out.println("Some sound");
  }
}

class Dog extends Animal {
  @Override
  void makeSound() {
    System.out.println("Woof");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal pet = new Dog();
    pet.makeSound(); // Woof
  }
}
```


