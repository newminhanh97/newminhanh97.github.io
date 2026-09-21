---
sort: 6
---

# Java Math

The Java Math class has many methods that allows you to perform mathematical tasks on numbers.

## Common operations

```java
System.out.println(Math.max(8, 12));  // 12
System.out.println(Math.min(8, 12));  // 8
System.out.println(Math.abs(-7));     // 7
System.out.println(Math.sqrt(81));    // 9.0
System.out.println(Math.pow(2, 3));   // 8.0
```

- `Math.max` and `Math.min` return the larger or smaller of two values.
- `Math.abs` returns an absolute value. 
- `Math.sqrt` calculates a square root.
- `Math.pow(base, exponent)` raises a value to a power. Some methods return a
`double`, even when their arguments are whole numbers.

## Rounding

Use the method that matches the rounding behavior you need:

```java
System.out.println(Math.round(4.6)); // 5
System.out.println(Math.floor(4.9)); // 4.0
System.out.println(Math.ceil(4.1));  // 5.0
```

- `Math.round`  - rounds to the nearest integer.
- `Math.floor` - rounds up (returns the smallest integer greater than or equal to x)
- `Math.ceil` - rounds down (returns the largest integer less than or equal to x). The
`floor` and `ceil` methods return `double`.

## Random values

`Math.random()` returns a `double` greater than or equal to `0.0` and less than `1.0`. Scale and convert it to produce an integer in an inclusive range:

Ex: Random number between 0 and 100
```java
int randomNum = (int)(Math.random() * 101);  // 0 to 100
```


## Further reading

- [W3Schools: Java Math](https://www.w3schools.com/java/java_math.asp)
- [W3Schools: Java Math Methods](https://www.w3schools.com/java/java_ref_math.asp)
