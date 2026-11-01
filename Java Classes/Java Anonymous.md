---
sort: 6
navTitle: Java Anonymous
---

# Java Anonymous Classes

An anonymous class is a class without a name. It is created and used at the same time.

You often use anonymous classes to override methods of an existing class or interface, without writing a separate class file.

## Anonymous Class from an Interface

Create an anonymous class with `new InterfaceName() { ... }`. The body provides implementations for the interface's required methods:

```java
interface Greeting {
  void sayHello();
}

public class Main {
  public static void main(String[] args) {
    Greeting greeting = new Greeting() {
      @Override
      public void sayHello() {
        System.out.println("Hello!");
      }
    };

    greeting.sayHello();
  }
}
```

The expression creates an object whose type implements `Greeting`; the
anonymous class itself has no name that can be used elsewhere.

## Extend a class

We create an anonymous class that extends another class and overrides its method.:

```java
// Normal class
class Animal {
  public void makeSound() {
    System.out.println("Animal sound");
  }
}

public class Main {
  public static void main(String[] args) {
    // Anonymous class that overrides makeSound()
    Animal myAnimal = new Animal() {
      public void makeSound() {
        System.out.println("Woof woof");
      }
    }; // semicolon is required to end the line of code that creates the object

    myAnimal.makeSound();
  }
}
```

## When to use an anonymous class

Use anonymous classes when you need to create a short class for one-time use. For example:

- Overriding a method without creating a new subclass
- Implementing an interface quickly
- Passing small pieces of behavior as objects

## Further reading

- [W3Schools: Java Anonymous Classes](https://www.w3schools.com/java/java_anonymous.asp)
