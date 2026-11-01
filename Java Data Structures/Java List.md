---
sort: 3
navTitle: Java List
---

# I. Java List

**Java List Interface**

The `List` interface is part of the "Java Collections Framework" and represents an **ordered collection** of elements.

You can access elements by their index, add duplicates, and maintain the insertion order.

Since **List is an interface**, you **cannot** create a List object directly. Instead, use a class that implements the `List` interface, such as:

- ArrayList - like a resizable array with fast random access
- LinkedList - like a train of cars you can easily attach or remove. Lists
are resizable, unlike Java arrays.

Common operations include `add`, `get`, `set`, and `remove`. List indexes start
at `0`, and an invalid index causes an `IndexOutOfBoundsException`.


## Common List Methods

| Method | Description |
| --- | --- |
| `add()` | Adds an element to the end of the list |
| `get()` | Returns the element at the specified position |
| `set()` | Replaces the element at the specified position |
| `remove()` | Removes the element at the specified position |
| `size()` | Returns the number of elements in the list |

## List vs. Array

| **Array** | **List** |
| --- | --- |
| Fixed size | Dynamic size |
| Faster performance for raw data | More flexible and feature-rich |
| Not part of Collections Framework | Part of the Collections Framework |

```java
import java.util.ArrayList;
import java.util.List;

List<String> names = new ArrayList<>();
names.add("Ari");
names.add("Sam");
names.add("Ari"); // Duplicates are allowed

System.out.println(names.get(1)); // Sam
names.set(1, "Lee");
names.remove(0);
System.out.println(names.size()); // 2
```

## II. ArrayList

An `ArrayList` is like a **resizable** array. It is part of the `java.util` package and implements the `List` interface.

The difference between a built-in `array` and an `ArrayList` in Java, is that the size of an array cannot be modified (if you want to add or remove elements to/from an array, you have to create a new one). While elements can be added and removed from an ArrayList whenever you want.

**Create an ArrayList**

```java
import java.util.ArrayList; // Import the ArrayList class

ArrayList<String> cars = new ArrayList<String>(); // Create an ArrayList object
    cars.add("Volvo");
    cars.add("BMW");

    cars.add(0, "Mazda"); // Insert element at the beginning of the list (0)
    cars.get(0);         // Get the first element
    cars.set(0, "Opel"); // Modify an element, refer to the index number
    cars.remove(0);     // Remove an Element, refer to the index number
    cars.clear();       // Remove all the elements
    cars.size();        // Find out how many elements an ArrayList
```

- An `ArrayList` keeps elements in the same order you add them, so the first item you add will be at index 0, the next at index 1, and so on.

**Loop Through an ArrayList**

```java
    for (int i = 0; i < cars.size(); i++) {
      System.out.println(cars.get(i));
    }
```

```java
    for (String i : cars) {
      System.out.println(i);
    }
```

**Other Types**

Elements in an `ArrayList` are actually objects. Remember that a `String` in Java is an object (not a primitive type). To use other types, such as `int`, you must specify an equivalent **wrapper class**: `Integer`. For other primitive types, use: `Boolean` for boolean, `Character` for char, `Double` for double

**Sort an ArrayList**

`Collections` class includes the `sort()` method for sorting lists alphabetically or numerically

```java
Collections.sort(cars);  // Sort cars
```

**The List Interface**

Variable (cars) is declared as a `List` (the interface), but it stores an `ArrayList` object (the actual list). Since `ArrayList` implements the `List` interface.

```java
import java.util.List;
import java.util.ArrayList;

List<String> cars = new ArrayList<>();
```

## III. LinkedList

**ArrayList vs. LinkedList**

The `LinkedList` class is a collection which can contain many objects of the same type, just like the `ArrayList`.

The `LinkedList` class has the same methods as `ArrayList` because both follow the `List` interface.

**How the ArrayList works**
The `ArrayList` class has a regular array inside it. When an element is added, it is placed into the array. If the array is not big enough, a new, larger array is created to replace the old one and the old one is removed.

**How the LinkedList works**
The `LinkedList` stores its elements in "containers." The list has a link to the first container and each container has a link to the next container in the list. To add an element to the list, the element is placed into a new container and that container is linked to one of the other containers in the list.

**When To Use**
Use an `ArrayList` for storing and accessing data, and `LinkedList` to manipulate data.

```java
import java.util.LinkedList;

LinkedList<String> stops = new LinkedList<>();
stops.add("Central");
stops.addFirst("Airport");
stops.addLast("Harbor");
System.out.println(stops); // [Airport, Central, Harbor]
```

**LinkedList Methods**

For many cases, the `ArrayList` is more efficient as it is common to need access to random elements in the list, but the `LinkedList` provides several methods to do certain operations more efficiently


| Method | Description |
| --- | --- |
| `addFirst()` | Adds an element to the beginning of the list |
| `addLast()` | Add an element to the end of the list |
| `removeFirst()` | Remove an element from the beginning of the list |
| `removeLast()` | Remove an element from the end of the list |
| `getFirst()` | Get the element at the beginning of the list |
| `getLast()` | Get the element at the end of the list |

**The List Interface**

Variable (cars) is declared as a `List` (the interface), but it stores a `LinkedList` object (the actual list). Since `LinkedList` implements the `List` interface, this is possible

```java
import java.util.List;
import java.util.LinkedList;

List<String> cars = new LinkedList<>();
```

## IV. Sort a list

**Java Sort a List**

`Collections` class includes the `sort()` method for sorting lists alphabetically or numerically.

Sort an ArrayList of Strings alphabetically in ascending orde

**Sort an ArrayList**

```java
import java.util.ArrayList;
import java.util.Collections;  // Import the Collections class

public class Main {
  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");

    Collections.sort(cars);  // Sort cars

    Collections.sort(cars, Collections.reverseOrder()); // Reverse the Order

    for (String i : cars) {
      System.out.println(i);
    }
  }
}
```

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

List<String> fruits = new ArrayList<>(List.of("Pear", "Apple", "Orange"));
Collections.sort(fruits);
System.out.println(fruits); // [Apple, Orange, Pear]

fruits.sort(Collections.reverseOrder());
System.out.println(fruits); // [Pear, Orange, Apple]
```

For custom ordering, pass a comparator to `sort`, for example
`fruits.sort(String.CASE_INSENSITIVE_ORDER)`.

## Further reading

- [W3Schools: Java List](https://www.w3schools.com/java/java_list.asp)
- [W3Schools: Java ArrayList](https://www.w3schools.com/java/java_arraylist.asp)
- [W3Schools: Java LinkedList](https://www.w3schools.com/java/java_linkedlist.asp)
- [W3Schools: Java Sort a List](https://www.w3schools.com/java/java_sort_list.asp)
