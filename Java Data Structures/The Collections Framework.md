---
sort: 2
navTitle: Java Collections
---

# The Collections Framework

The Java Collections Framework provides a set of **interfaces** (like `List`, `Set`, and `Map`) and a set of **classes** (`ArrayList`, `HashSet`, `HashMap`, etc.) that implement those interfaces.

All of these are part of the java.util package.

## Core Interfaces in the Collections Framework

Here are some common interfaces, along with their classes:

| Interface | Common Classes | Description |
| --- | --- | --- |
| `List` | `ArrayList`, `LinkedList` | Ordered collection that allows duplicates |
| `Set` | `HashSet`, `TreeSet`, `LinkedHashSet` | Collection of **unique elements** |
| `Map` | `HashMap`, `TreeMap`, `LinkedHashMap` | Stores **key-value pairs** with unique keys |

## Overview of Classes

Here are some common data structure classes and their characteristics:

| Interface | Class | Description |
| --- | --- | --- |
| `List` | `ArrayList` | Resizable array that maintains order and allows duplicates |
|  | `LinkedList` | List with fast insert and remove operations |
| `Set` | `HashSet` | Unordered collection of unique elements |
|  | `TreeSet` | Sorted set of unique elements (natural order) |
|  | `LinkedHashSet` | Maintains the order in which elements were inserted |
| `Map` | `HashMap` | Stores key/value pairs with no specific order |
|  | `TreeMap` | Sorted map based on the natural order of keys |
|  | `LinkedHashMap` | Maintains the order in which keys were inserted |


- Use `List` classes when you care about **order**, may have **duplicates**, and access elements by **index**.

- Use `Set` classes when you need to store **unique** values only.

- Use `Map` classes when you need to store **pairs of keys and values**.

Declare a variable using the interface when the code only needs the interface's
operations. This makes it easier to replace the implementation later:

```java
import java.util.ArrayList;
import java.util.List;

List<String> languages = new ArrayList<>();
languages.add("Java");
languages.add("Kotlin");
```

## Collection utilities

`Collections` is a utility class, distinct from the `Collection` interface.
It provides static operations for collections, including sorting and
reversing lists:

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

List<Integer> scores = new ArrayList<>(List.of(42, 17, 35));
Collections.sort(scores);
System.out.println(scores); // [17, 35, 42]
```

## Continue learning

- [[Java List]]
- [[Java Set]]
- [[Java Map]]

## Further reading

- [W3Schools: The Collections Framework](https://www.w3schools.com/java/java_collections.asp)
