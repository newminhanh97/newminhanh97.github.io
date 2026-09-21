---
sort: 3
---

# Java Variables

Variables are containers for storing data values.

In Java, there are different types of variables, for example:

- `String` - stores text, such as "Hello". String values are surrounded by `double quotes`
- `int` - stores integers (whole numbers), without decimals, such as 123 or -123
- `float` - stores floating point numbers, with decimals, such as 19.99 or -19.99
- `char` - stores single characters, such as 'a' or 'B'. Char values are surrounded by `single quotes`
- `boolean` - stores values with two states: true or false

## Declare and initialize variables

`Syntax: type variableName = value;`

```java
int age = 25;
String name = "Mina";
double price = 19.99;
char grade = 'A';
boolean isReady = true;
```

A variable can also be declared first and assigned later:

```java
int score;
score = 10;
```

Local variables must be assigned before they are read.

## Print variable values

Pass a variable to `System.out.println` to print its value. Use `+` to join text with a value:

```java
String name = "Mina";
int age = 25;

System.out.println(name);
System.out.println("Age: " + age);
```

`println` ends the output with a new line. `print` writes without adding a new
line:

```java
System.out.print("Hello, ");
System.out.print(name);
```

## Declare multiple variables

Variables of the same type can be declared in one statement, separated by commas:

```java
int x = 5, y = 6, z = 50;
```

You can also assign one value to several same-typed variables:

```java
int x, y, z;
x = y = z = 50;
```

## Name variables with identifiers

All Java variables must be identified with unique names.

The general rules for naming variables are:
- Names can contain letters, digits, underscores, and dollar signs
- Names must begin with a letter
- Names should start with a lowercase letter, and cannot contain whitespace
- Names can also begin with $ and _
- Names are case-sensitive ("myVar" and "myvar" are different variables)
- Reserved words (like Java keywords, such as int or boolean) cannot be used as names

Examples:

```java
int itemCount = 3;  // valid
int _index = 0;     // valid
int 2ndNumber = 5;  // Cannot start with a digit
int my var = 10;    // Cannot contain spaces
int int = 20;       // Cannot use reserved keywords
```

By convention, variable names use lower camel case: start with a lowercase letter and capitalize the first letter of each following word, as in `itemCount` or `totalPrice`.

## Java Constants (final)

A variable declared with final becomes a constant, which means unchangeable and read-only

```java
final int myNum = 15;
myNum = 20;  // Error: cannot assign a value to final variable 'myNum'
```

By convention, final variables in Java are usually written in upper case (e.g. BIRTHYEAR)
```java
final int MINUTES_PER_HOUR = 60;
final int BIRTHYEAR = 1980;
```

## Further reading

- [W3Schools: Java Variables](https://www.w3schools.com/java/java_variables.asp)
- [W3Schools: Java Variables - Print](https://www.w3schools.com/java/java_variables_print.asp)
- [W3Schools: Java Variables - Multiple](https://www.w3schools.com/java/java_variables_multiple.asp)
- [W3Schools: Java Variables - Identifiers](https://www.w3schools.com/java/java_variables_identifiers.asp)
- [W3Schools: Java Variables - Final](https://www.w3schools.com/java/java_variables_final.asp)
