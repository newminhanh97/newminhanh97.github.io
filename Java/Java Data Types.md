---
sort: 4
---

# Java Data Types

Data types are divided into two groups:
- Primitive data types - includes `byte, short, int, long, float, double, boolean and char`
- Non-primitive data types (reference types) - such as `String, Arrays and Classes`.

```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String
```

## Primitive types

Java has eight primitive types:

| Type | What it stores | Example |
|---|---|---|
| `byte` | 8-bit signed integer | `byte attempts = 3;` |
| `short` | 16-bit signed integer | `short year = 2026;` |
| `int` | 32-bit signed integer | `int population = 50000;` |
| `long` | 64-bit signed integer | `long distance = 9000000000L;` |
| `float` | 32-bit floating-point number | `float temperature = 21.5f;` |
| `double` | 64-bit floating-point number | `double price = 19.99d;` |
| `char` | One UTF-16 code unit | `char initial = 'J';` |
| `boolean` | `true` or `false` | `boolean isOpen = true;` |

## Numeric types

Primitive number types are divided into two groups:

- Integer types stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are byte, short, int and long.

- Floating point types represents numbers with a fractional part, containing one or more decimals. There are two types: float and double.

```java
int items = 12;
long views = 5000000000L;
float ratio = 0.75f;
double average = 8.25;
```

## Boolean values

The primitive type `boolean` has only two values: `true` and `false`. It is
useful for conditions and flags:

```java
boolean hasAccess = true;

if (hasAccess) {
    System.out.println("Access granted");
}
```

## Characters and String

### Characters

The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c'

```java
char letter = 'A';
char myVar1 = 65;
```

### String
The String data type is used to store a sequence of characters (text). String values must be surrounded by double quotes

```java
String greeting = "Hello, Java!";
```

`String` is a reference type, not a primitive type.

## Non-Primitive Data Types (Reference types)

Non-primitive data types are called reference types (ex: Strings, Arrays, Classes) because they refer to objects.

The main differences between primitive and non-primitive data types are:

- Primitive types in Java are predefined and built into the language, while non-primitive types are created by the programmer (except for String).
- Non-primitive types can be used to call methods to perform certain operations, whereas primitive types cannot.
- Primitive types start with a lowercase letter (like int), while non-primitive types typically starts with an uppercase letter (like String).
- Primitive types always hold a value, whereas non-primitive types can be null.

```java
String language = "Java";
int[] scores = {90, 85, 100};
```

Primitive variables hold values directly, while reference variables refer to
objects. This distinction affects assignment and comparison: use `.equals()` to
compare the contents of strings rather than `==`.

## Local variable type inference with `var`

The `var` keyword lets the compiler automatically detect the type of a variable based on the value you assign to it.

```java
var myNum = 5;         // int
var myDouble = 9.98;   // double
var myChar = 'D';      // char
var myBoolean = true;  // boolean
var myString = "Hello"; // String
```

1. var only works when you assign a value at the same time (you can't declare var x; without assigning a value)
```java
var x; // Error
var x = 5;  // OK
```

2. Once the type is chosen, it stays the same.
```java
var x = 5;  // x is now an int
x = 10;     // OK - still an int
x = 9.99;   // Error - can't assign a double to an int
```
## Java Type Casting

Type casting means converting one data type into another. In Java, there are two main types of casting:
- `Widening Casting (automatic)` - converting a smaller type to a larger type size
`byte -> short -> char -> int -> long -> float -> double`
- `Narrowing Casting (manual)` - converting a larger type to a smaller type size
`double -> float -> long -> int -> char -> short -> byte`

### Widening Casting
Widening casting is done automatically when passing a smaller size type into a larger size type. This works because there is no risk of losing information
```java
int myInt = 9;
double myDouble = myInt; // Automatic casting: int to double
System.out.println(myInt);    // Outputs 9
System.out.println(myDouble); // Outputs 9.0
```

### Narrowing Casting
Narrowing casting must be done manually by placing the type in parentheses () in front of the value. This is required because narrowing may result in data loss (for example, dropping decimals when converting a double to an int)
```java
double myDouble = 9.78d;
int myInt = (int) myDouble; // Manual casting: double to int
System.out.println(myDouble); // Outputs 9.78
System.out.println(myInt);    // Outputs 9
```

## Further reading

- [W3Schools: Java Data Types](https://www.w3schools.com/java/java_data_types.asp)
- [W3Schools: Java Numbers](https://www.w3schools.com/java/java_data_types_numbers.asp)
- [W3Schools: Java Booleans](https://www.w3schools.com/java/java_data_types_boolean.asp)
- [W3Schools: Java Characters](https://www.w3schools.com/java/java_data_types_characters.asp)
- [W3Schools: Java Non-Primitive Data Types](https://www.w3schools.com/java/java_data_types_non-prim.asp)
- [W3Schools: Java `var`](https://www.w3schools.com/java/java_var.asp)
