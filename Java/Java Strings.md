---
sort: 5
---

# Java Strings

Strings are used for storing text. A `String`  variable contains a collection of characters surrounded by double quotes (""):

```java
String greeting = "Hello, Java!";
String empty = "";
```

## String Methods
A String in Java is actually an object, which means it contains methods that can perform certain operations on strings.

- [W3Schools: Java String Methods](https://www.w3schools.com/java/java_ref_string.asp)

```java
    String txt = "Hello World  "; // Has 2 spaces after 'World'
    System.out.println(txt.toUpperCase());  //   HELLO WORLD  
    System.out.println(txt.toLowerCase());  //   hello word
    System.out.println("The length of the txt string is: " + txt.length()); // The length of the txt string is: 13
    System.out.println(txt.indexOf("World")); // 6
    System.out.println(txt.charAt(0)); // H
	System.out.println(txt.charAt(4)); // o
    System.out.println("The txt after trim: " + txt.trim()); // The txt after trim: Hello World
```

## Comparing Strings

To compare two strings, you can use the equals() method:

```java
String txt1 = "Hello";
String txt2 = "Hello";

String txt3 = "Greetings";
String txt4 = "Great things";

System.out.println(txt1.equals(txt2));  // true
System.out.println(txt3.equals(txt4));  // false
```


## String Concatenation

The `+ operator` can be used between strings to combine them. This is called *concatenation*

```java
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```

The `concat()` method also joins strings and returns a new string:

```java
String a = "Java ";
String b = "is ";
String c = "fun!";
String result = a.concat(b).concat(c);
System.out.println(result);
```

## Strings and numbers

Java uses the + operator for both addition and concatenation. Numbers are added. Strings are concatenated.
- If you add two numbers, the result will be a number
- If you add two strings, the result will be a string concatenation
- If you add a number and a string, the result will be a string concatenation


## Escape characters

Because strings must be written within quotes, Java will misunderstand this string, and generate an error:

```java
String txt = "We are the so-called "Vikings" from the north.";
```

| Sequence | Meaning |
|---|---|
| `\n` | New line |
| `\t` | Tab |
| `\b` | Backspace |
| `\r` | Carriage return |
| `\"` | Double quote |
| `\'` | Single quote |
| `\\` | Backslash |

For example:

```java
String quote = "She said, \"Hello!\"";
String filePath = "C:\\Java\\Main.java";
String lines = "First line\nSecond line";
```

## Further reading

- [W3Schools: Java Strings](https://www.w3schools.com/java/java_strings.asp)
- [W3Schools: Java String Concatenation](https://www.w3schools.com/java/java_strings_concat.asp)
- [W3Schools: Java Strings and Numbers](https://www.w3schools.com/java/java_strings_numbers.asp)
- [W3Schools: Java Special Characters](https://www.w3schools.com/java/java_strings_specchars.asp)
