---
sort: 3
navTitle: Java Modifiers
---

# Java Modifiers

Modifiers are keywords in a class, attributes, methods and constructors that affect visibility or behavior. They are commonly grouped into two groups **access modifiers** and **non-access modifiers**.

## Access modifiers

For **classes**, you can use either `public` or the default access level:

| Modifier | Description |
| --- | --- |
| `public` | The class is accessible by **any other class**. |
| default | The class is accessible only by **classes in the same package**. This is used when you do not specify a modifier. |

For **attributes, methods and constructors**, you can use one of the following:

| Modifier | Description |
| --- | --- |
| `public` | The code is accessible from **all classes**. |
| `private` | The code is accessible only within the **declaring class**. |
| default | The code is accessible only within the **same package**. This is used when you do not specify a modifier. |
| `protected` | The code is accessible within the **same package** and by **subclasses**. |


## Non-access modifiers

Non-access modifiers do not control visibility (like `public` or `private`), but instead add **other features** to classes, methods, and attributes.

The most commonly used non-access modifiers are `final`, `static`, and `abstract`.

**Non-Access Modifiers List**

### For classes

| Modifier | Description |
| --- | --- |
| `final` | The class **cannot be extended** by another class. |
| `abstract` | 	The class **cannot be used to create objects**. To access an abstract class, it **must be inherited** from another class. |

### For attributes and methods

| Modifier | Description |
| --- | --- |
| `final` | Attributes and methods cannot be overridden/modified. |
| `static` | Attributes and methods belong to the class, not to objects. This means all objects share the same static attribute, and static methods can be called without creating objects. |
| `abstract` | 	Can only be used in an **abstract class**, and can only be used on methods. The method does **not have a body**. The body is provided by the subclass (inherited from). |
| `transient` | Attributes and methods are skipped when serializing the object containing them. |
| `synchronized` | Methods can only be accessed by one thread at a time. |
| `volatile` | The value of an attribute is not cached thread-locally, and is always read from the "main memory". |

The table groups modifiers by the kinds of declarations they can modify. `transient` and `volatile` apply to fields, while `synchronized` applies to methods.


### `static`

A static field or method belongs to the class, not to any specific object. This means you can call it without creating an object of the class. Use the class name to access it:

```java
class Counter {
  static int total = 0;

  Counter() {
    total++;
  }
}

public class Main {
  public static void main(String[] args) {
    new Counter();
    new Counter();
    System.out.println(Counter.total); // 2
  }
}
```

**Note:** A `static` method belongs to the class itself. You can call it without creating an object, but it cannot use variables or methods that belong to an object.

### `final`

- A `final` variable can be assigned only once, cannot be overridden.
- A `final` method cannot be overridden in a subclass.
- A `final` class cannot be extended.

```java
final class Utility {
  static final int MAX_RETRIES = 3;
}
```

### `abstract`

An **`abstract` method** belongs to an **`abstract` class**, and it does **not have a body**. The body is provided by the subclass

```java
abstract class Animal {
  abstract void makeSound();
}

class Dog extends Animal {
  @Override
  void makeSound() {
    System.out.println("Woof");
  }
}
```



## Choosing modifiers

Use the least permissive access that supports the intended use of a member.
Choose non-access modifiers only when their behavior is needed: for example,
`static` for class-level state, `final` to prevent reassignment or extension,
and `abstract` to require behavior from subclasses.

## Further reading

- [W3Schools: Java Modifiers](https://www.w3schools.com/java/java_modifiers.asp)
- [W3Schools: Java Non-Access Modifiers](https://www.w3schools.com/java/java_non_modifiers.asp)
