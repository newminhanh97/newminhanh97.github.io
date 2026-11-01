---
sort: 2
navTitle: Java Classes/Objects
---

# Java Classes/Objects

Java is an object-oriented programming language. Everything in Java is associated with **classes** and **objects**, along with its attributes and methods.

- A **class** is a blueprint that declares the fields (data) and methods (behavior) its objects can have. 
- An **object** is an instance created from a class. Each object has its own instance-field values.

## Create a Class

To create a class, use the keyword `class`.

A class should always start with an uppercase first letter, and that the name of the java file should match the class name.

## Create and use objects

In Java, an object is created from a class. After defining a class, you can create objects from it using the `new` keyword. Access its fields and methods with the dot operator:

```java
public class Main {
  public static void main(String[] args) {
    Car firstCar = new Car();
    firstCar.color = "blue";
    firstCar.drive();

    Car secondCar = new Car();
    secondCar.color = "red";

    System.out.println(firstCar.color);  // blue
    System.out.println(secondCar.color); // red
  }
}
```

### Java Class Attributes

`Attributes` are variables that belong to a class. Another name for attributes is **fields**.

**Accessing Attributes**
You can access attributes by `creating an object of the class`, and by using the dot syntax (`.`)

**Modify Attributes**
- You can also modify attribute values
- Override existing values
- If you don't want the ability to override existing values, declare the attribute as `final` (Ex: **final** int x = 10;)

The `final` keyword is called a **"modifier"**. The `final` keyword is useful when you want a variable to always store the same value, like PI (3.14159...).

### Java Class Methods

**Java Class Methods**
Methods are declared within a class, and are used to perform certain actions. To call a method, write the method's name followed by two parentheses **()** and a semicolon**;**

**Access Methods With an Object**
- The dot (`.`) is used to access the object's attributes and methods.
- To call a method in Java, write the method name followed by a set of parentheses `()`, followed by a semicolon (`;`).
- A class must have a matching filename (Main and Main.java).

## Constructors

A constructor in Java is a **special method** that is used to **initialize objects**. Its **name must match the class name**, and it **has no return type**. A parameterized constructor can set the initial field values:

```java
class Car {
  String color;

  Car(String color) {
    this.color = color;
  }
}

public class Main {
  public static void main(String[] args) {
    Car firstCar = new Car("blue");
    System.out.println(firstCar.color); // blue
  }
}
```

Here, `this.color` refers to the object's field, while `color` is the
constructor parameter. When a class declares no constructor, Java provides a
default no-argument constructor. Declaring a constructor means Java no longer
provides that default constructor automatically.

**Constructor Parameters**

Constructors can also take parameters, which is used to initialize attributes

### Java this

**Java this Keyword**
The `this` keyword in Java refers to the current object in a method or constructor.

The `this` keyword is often used to avoid confusion when class attributes have the same name as method or constructor parameters.

**Accessing Class Attributes**

Sometimes a constructor or method has a parameter with the same name as a class variable. When this happens, the parameter temporarily hides the class variable inside that method or constructor.

To refer to the class variable and not the parameter, you can use the `this` keyword:

**Tip:** Think of this.x = x; as: "this.x (the class variable) gets the value of x (the parameter)."

Without `this`, the code above `x = x`; would set the parameter `x` equal to itself, and the class variable would stay uninitialized (`0`).

