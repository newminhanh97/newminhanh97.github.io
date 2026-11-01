---
sort: 4
navTitle: Java Inner Classes & super Keyword
---

# Java Inner Classes and the `super` Keyword

## The `super` keyword

The `super` keyword is used to refer to the **parent class** of a subclass.
The most common use of the `super` keyword is to eliminate the confusion between superclasses and subclasses that have methods with the same name.

It can be used in two main ways:
- To access attributes and methods from the parent class
- To call the parent class constructor

### Access Parent Methods

If a subclass has a method with the same name as one in its parent class, you can use super to call the parent version

**Note:** Use `super` when you want to call a method from the parent class that has been overridden in the child class `super.methodName(...)`.

### Access Parent Attributes

You can also use `super` to access an attribute from the parent class if they have an attribute with the same name

### Call Parent Constructor

Use `super(...)` to call the constructor of the parent class. This is especially useful for reusing initialization code.

**Note:** The call to super() must be the first statement in the subclass constructor.

### Access a hidden superclass field

If a subclass declares a field with the same name as a superclass field,
`super.fieldName` refers to the superclass field. Fields are hidden rather than overridden:

```java
class Parent {
  String label = "parent";
}

class Child extends Parent {
  String label = "child";

  void printLabels() {
    System.out.println(label);       // child
    System.out.println(super.label); // parent
  }
}
```

### `this` and `super`

`this` refers to the current object. `super` refers to the superclass part of that same object. Both can help distinguish members, but `super(...)` has the special constructor rule that it must be the first statement in a constructor.

## Inner and nested classes

In Java, it is also possible to nest classes (a class within a class). The purpose of nested classes is to **group classes** that belong together, which makes your code more readable and maintainable.

To access the inner class, create an object of the outer class, and then create an object of the inner class

**Private Inner Class**

Unlike a "regular" class, an inner class can be `private` or `protected`. If you don't want outside objects to access the inner class, declare the class as private:

**Static Inner Class**

An inner class can also be `static`, which means that you can access it without creating an object of the outer class

**Note:** just like `static` attributes and methods, a `static` inner class does not have access to members of the outer class.

**Access Outer Class From Inner Class**

One advantage of inner classes, is that they can access attributes and methods of the outer class


## Further reading

- [W3Schools: Java Inner Classes](https://www.w3schools.com/java/java_inner_classes.asp)
- [W3Schools: Java super Keyword](https://www.w3schools.com/java/java_super.asp)
