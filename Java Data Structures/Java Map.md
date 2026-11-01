---
sort: 5
navTitle: Java Map
---

# I. Java Map

**Java Map Interface**

The `Map` interface is part of the Java Collections Framework and is used to
store key-value pairs. Each key must be unique, but values can be duplicated.

A `Map` is useful when you want to associate a key, such as a name or ID, with
a value, such as an age or description. Common classes that implement `Map`
include `HashMap`, `TreeMap`, and `LinkedHashMap`.

## Common Map Methods

| Method | Description |
| --- | --- |
| `put()` | Adds or updates a key-value pair |
| `get()` | Returns the value for a given key |
| `remove()` | Removes the key and its value |
| `containsKey()` | Checks if the map contains the key |
| `keySet()` | Returns a set of all keys |
| `size()` | Returns the number of key-value pairs |
| `clear()` | Removes all key-value pairs |

## Map vs. Set vs. List

| Feature | **List** | **Set** | **Map** |
| --- | --- | --- | --- |
| Duplicates allowed? | Yes | No | Keys: No; Values: Yes |
| Stores key-value pairs? | No | No | Yes |
| Maintains order? | Yes | No (unless using `TreeSet` or `LinkedHashSet`) | No (unless using `TreeMap` or `LinkedHashMap`) |

```java
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> people = new HashMap<>();
people.put("Ari", 32);
people.put("Sam", 30);
people.put("Ari", 33); // Updates Ari's value

System.out.println(people.get("Ari")); // 33
System.out.println(people.containsKey("Sam")); // true
System.out.println(people.keySet()); // [Ari, Sam] (order is not guaranteed)
```

## II. HashMap

A `HashMap` stores items in key-value pairs, where each key maps to a value.
It is part of the `java.util` package and implements the `Map` interface.
Use a key to retrieve its value rather than an index.

**Create a HashMap**

```java
import java.util.HashMap;

HashMap<String, String> capitalCities = new HashMap<>();
```

**Add Items**

Use `put()` to add key-value pairs. If a key is added again, its value is
updated:

```java
capitalCities.put("England", "London");
capitalCities.put("India", "New Delhi");
capitalCities.put("Austria", "Vienna");
capitalCities.put("Norway", "Oslo");
capitalCities.put("Norway", "Oslo"); // Same key; latest value is kept
capitalCities.put("USA", "Washington DC");

System.out.println(capitalCities);
```

**Access an Item**

Use `get()` with a key to access its value:

```java
System.out.println(capitalCities.get("England")); // London
```

**Remove Items**

Use `remove()` to remove an item by key, or `clear()` to remove all items:

```java
capitalCities.remove("England");
capitalCities.clear();
```

**HashMap Size**

Use `size()` to count the key-value pairs. Reusing a key updates its value and
does not add another pair:

```java
System.out.println(capitalCities.size());
```

**Loop Through a HashMap**

Use `keySet()` to loop through keys, `values()` to loop through values, or
combine keys and values:

```java
for (String country : capitalCities.keySet()) {
  System.out.println(country);
}

for (String city : capitalCities.values()) {
  System.out.println(city);
}

for (String country : capitalCities.keySet()) {
  System.out.println("key: " + country + " value: " + capitalCities.get(country));
}
```

`HashMap` does not guarantee iteration order.

**Other Types**

Keys and values are objects. To use primitive values such as `int`, use
wrapper classes such as `Integer`. Other wrapper classes include `Boolean`,
`Character`, and `Double`.

```java
HashMap<String, Integer> people = new HashMap<>();
people.put("John", 32);
people.put("Steve", 30);
people.put("Angie", 33);

for (String name : people.keySet()) {
  System.out.println("key: " + name + " value: " + people.get(name));
}
```

**When Order Matters**

`HashMap` does not maintain a particular order. Use `TreeMap` to sort entries
by key or `LinkedHashMap` to keep insertion order.

**The `var` Keyword**

Since Java 10, `var` can declare a local variable when its type can be inferred:

```java
var cities = new HashMap<String, String>();
```

**The Map Interface**

You can declare a variable as a `Map` while creating a `HashMap` object:

```java
import java.util.HashMap;
import java.util.Map;

Map<String, String> cities = new HashMap<>();
```

## III. TreeMap

A `TreeMap` stores key-value pairs in sorted order by key. It is part of the
`java.util` package and implements the `Map` interface. Unlike `HashMap`,
`TreeMap` keeps its keys sorted.

**Create and Add Items**

```java
import java.util.TreeMap;

TreeMap<String, String> capitalCities = new TreeMap<>();
capitalCities.put("England", "London");
capitalCities.put("India", "New Delhi");
capitalCities.put("Austria", "Vienna");
capitalCities.put("Norway", "Oslo");
capitalCities.put("USA", "Washington DC");

System.out.println(capitalCities);
// Keys are sorted: {Austria=Vienna, England=London, India=New Delhi, ...}
```

**Access and Remove Items**

Use `get()` to look up a value by key, `remove()` to remove a key-value pair,
and `clear()` to remove all items:

```java
System.out.println(capitalCities.get("England")); // London
capitalCities.remove("England");
capitalCities.clear();
```

**TreeMap Size and Looping**

Use `size()` to count key-value pairs. Use `keySet()` or `values()` to loop
through keys or values; keys are visited in sorted order:

```java
System.out.println(capitalCities.size());

for (String country : capitalCities.keySet()) {
  System.out.println(country + ": " + capitalCities.get(country));
}
```

**TreeMap vs. HashMap**

| Feature | `HashMap` | `TreeMap` |
| --- | --- | --- |
| Order | No guaranteed order | Sorted by keys |
| Null keys | Allows one null key | Does not allow null keys |
| Performance | Faster (no sorting) | Slower (maintains sorted order) |

Use `HashMap` when performance is the priority and order is unimportant. Use
`TreeMap` when you need sorted keys.

**The `var` Keyword**

```java
var sortedCities = new TreeMap<String, String>();
```

**The Map Interface**

You can declare the variable as a `Map` interface while storing a `TreeMap`:

```java
import java.util.Map;
import java.util.TreeMap;

Map<String, String> sortedCities = new TreeMap<>();
```

## IV. LinkedHashMap

A `LinkedHashMap` stores keys and values and keeps entries in the order they
were added. It is part of the `java.util` package and implements the `Map`
interface.

**Create and Add Items**

```java
import java.util.LinkedHashMap;

LinkedHashMap<String, String> capitalCities = new LinkedHashMap<>();
capitalCities.put("England", "London");
capitalCities.put("India", "New Delhi");
capitalCities.put("Austria", "Vienna");
capitalCities.put("Norway", "Oslo");
capitalCities.put("USA", "Washington DC");

System.out.println(capitalCities);
// Entries remain in insertion order.
```

**Access, Remove, and Count Items**

Use `get()` to retrieve a value by key, `remove()` to remove an entry, and
`clear()` to remove all entries. `size()` returns the number of unique keys:

```java
System.out.println(capitalCities.get("England")); // London
capitalCities.remove("England");
System.out.println(capitalCities.size());
```

**Loop Through a LinkedHashMap**

Loop through the keys to access entries in insertion order:

```java
for (String country : capitalCities.keySet()) {
  System.out.println("key: " + country + " value: " + capitalCities.get(country));
}
```

**HashMap vs. LinkedHashMap**

| Feature | `HashMap` | `LinkedHashMap` |
| --- | --- | --- |
| Order | No guaranteed order | Insertion order preserved |
| Duplicates | Keys are unique | Keys are unique |
| Performance | Faster | Slightly slower (tracks order) |

Use `LinkedHashMap` when predictable iteration order matters.

**The `var` Keyword**

```java
var orderedCities = new LinkedHashMap<String, String>();
```

**The Map Interface**

You can declare a variable as a `Map` while creating a `LinkedHashMap` object:

```java
import java.util.LinkedHashMap;
import java.util.Map;

Map<String, String> orderedCities = new LinkedHashMap<>();
```

## Further reading

- [W3Schools: Java Map](https://www.w3schools.com/java/java_map.asp)
- [W3Schools: Java HashMap](https://www.w3schools.com/java/java_hashmap.asp)
- [W3Schools: Java TreeMap](https://www.w3schools.com/java/java_treemap.asp)
- [W3Schools: Java LinkedHashMap](https://www.w3schools.com/java/java_linkedhashmap.asp)
