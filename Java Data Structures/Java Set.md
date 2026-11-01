---
sort: 4
navTitle: Java Set
---

# I. Java Set

**Java Set Interface**

The `Set` interface is part of the Java Collections Framework and is used to
store a collection of **unique elements**.

Unlike a `List`, a `Set` does not allow duplicates, and it does not guarantee
the order of elements unless you use `TreeSet` or `LinkedHashSet`.

Common classes that implement `Set` include `HashSet`, `TreeSet`, and
`LinkedHashSet`.

## Common Set Methods

| Method | Description |
| --- | --- |
| `add()` | Adds an element if it is not already in the set |
| `remove()` | Removes the element from the set |
| `contains()` | Checks if the set contains the element |
| `size()` | Returns the number of elements |
| `clear()` | Removes all elements |

## Set vs. List

| **List** | **Set** |
| --- | --- |
| Allows duplicates | Does not allow duplicates |
| Maintains order | Does not guarantee order |
| Access by index | No index-based access |

```java
import java.util.HashSet;
import java.util.Set;

Set<String> names = new HashSet<>();
names.add("Ari");
names.add("Sam");
names.add("Ari"); // Duplicate is ignored

System.out.println(names.contains("Sam")); // true
names.remove("Sam");
System.out.println(names.size()); // 1
```

Use a `Set` when you need to store unique values only.

## II. HashSet

A `HashSet` is a collection of unique elements. It is part of the `java.util`
package and implements the `Set` interface.

**Create a HashSet**

```java
import java.util.HashSet;

HashSet<String> cars = new HashSet<>();
```

**Add Elements**

Use `add()` to add elements. Adding a duplicate does not create another
element:

```java
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("BMW"); // Duplicate is ignored
cars.add("Mazda");

System.out.println(cars);
```

**Check If an Element Exists**

Use `contains()` to check whether an element exists:

```java
System.out.println(cars.contains("Mazda")); // true
```

**Remove Elements**

Use `remove()` to remove one element, or `clear()` to remove all elements:

```java
cars.remove("Volvo");
cars.clear();
```

**HashSet Size**

Use `size()` to count the elements. Duplicate values are counted only once:

```java
System.out.println(cars.size());
```

**Loop Through a HashSet**

Use a for-each loop to visit its elements:

```java
for (String car : cars) {
  System.out.println(car);
}
```

`HashSet` does not guarantee an iteration order.

**Other Types**

Elements in a `HashSet` are objects. To store primitive values such as `int`,
use their wrapper classes, such as `Integer`. Other wrapper classes include
`Boolean`, `Character`, and `Double`.

```java
HashSet<Integer> numbers = new HashSet<>();
numbers.add(4);
numbers.add(7);
numbers.add(8);

for (int number = 1; number <= 10; number++) {
  if (numbers.contains(number)) {
    System.out.println(number + " was found in the set.");
  }
}
```

**The `var` Keyword**

Since Java 10, `var` can be used to declare a local variable when its type can
be inferred from the value assigned to it:

```java
var moreCars = new HashSet<String>();
```

**The Set Interface**

You can declare the variable as a `Set` interface while creating a `HashSet`
object. This makes it easier to replace the implementation later:

```java
import java.util.HashSet;
import java.util.Set;

Set<String> cars = new HashSet<>();
```

## III. TreeSet

A `TreeSet` is a collection that stores unique elements in sorted order. It is
part of the `java.util` package and implements the `Set` interface. Unlike
`HashSet`, a `TreeSet` keeps its elements sorted automatically.

**Create a TreeSet**

```java
import java.util.TreeSet;

TreeSet<String> cars = new TreeSet<>();
```

**Add Elements**

Use `add()` to add elements. Duplicates are ignored, and elements are sorted:

```java
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("BMW"); // Duplicate is ignored
cars.add("Mazda");

System.out.println(cars); // [BMW, Ford, Mazda, Volvo]
```

**Check If an Element Exists**

```java
System.out.println(cars.contains("Mazda")); // true
```

**Remove Elements**

Use `remove()` to remove an element, or `clear()` to remove all elements:

```java
cars.remove("Volvo");
cars.clear();
```

**TreeSet Size and Looping**

Use `size()` to count the unique elements. A for-each loop visits them in
sorted order:

```java
TreeSet<Integer> numbers = new TreeSet<>();
numbers.add(40);
numbers.add(10);
numbers.add(30);
numbers.add(20);

System.out.println(numbers.size()); // 4
for (int number : numbers) {
  System.out.println(number); // 10, 20, 30, 40
}
```

**HashSet vs. TreeSet**

| Feature | `HashSet` | `TreeSet` |
| --- | --- | --- |
| Order | No guaranteed order | Sorted (natural order) |
| Duplicates | Not allowed | Not allowed |
| Performance | Faster (no sorting) | Slower (due to sorting) |

Use `HashSet` when order is unimportant and you want faster operations. Use
`TreeSet` when you need sorted elements.

**The `var` Keyword**

```java
var sortedCars = new TreeSet<String>();
```

**The Set Interface**

As with `HashSet`, you can declare the variable using the `Set` interface:

```java
import java.util.Set;
import java.util.TreeSet;

Set<String> sortedCars = new TreeSet<>();
```

## IV. LinkedHashSet

A `LinkedHashSet` stores unique elements and remembers the order in which they
were added. It is part of the `java.util` package and implements the `Set`
interface.

**Create and Add Elements**

```java
import java.util.LinkedHashSet;

LinkedHashSet<String> cars = new LinkedHashSet<>();
cars.add("Volvo");
cars.add("BMW");
cars.add("Ford");
cars.add("BMW"); // Duplicate is ignored
cars.add("Mazda");

System.out.println(cars); // [Volvo, BMW, Ford, Mazda]
```

**Check, Remove, and Count Elements**

Use `contains()` to check for an element, `remove()` to remove one, `clear()`
to remove all, and `size()` to count the unique elements:

```java
System.out.println(cars.contains("Mazda")); // true
cars.remove("Volvo");
System.out.println(cars.size());
```

**Loop Through a LinkedHashSet**

A for-each loop visits elements in insertion order:

```java
for (String car : cars) {
  System.out.println(car);
}
```

**HashSet vs. LinkedHashSet**

| Feature | `HashSet` | `LinkedHashSet` |
| --- | --- | --- |
| Order | No guaranteed order | Insertion order preserved |
| Duplicates | Not allowed | Not allowed |
| Performance | Faster | Slightly slower (due to order tracking) |

Use `HashSet` when you only need uniqueness and order is unimportant. Use
`LinkedHashSet` when insertion order matters.

**The `var` Keyword**

```java
var orderedCars = new LinkedHashSet<String>();
```

**The Set Interface**

You can use the `Set` interface as the variable type:

```java
import java.util.LinkedHashSet;
import java.util.Set;

Set<String> orderedCars = new LinkedHashSet<>();
```

## Further reading

- [W3Schools: Java Set](https://www.w3schools.com/java/java_set.asp)
- [W3Schools: Java HashSet](https://www.w3schools.com/java/java_hashset.asp)
- [W3Schools: Java TreeSet](https://www.w3schools.com/java/java_treeset.asp)
- [W3Schools: Java LinkedHashSet](https://www.w3schools.com/java/java_linkedhashset.asp)
