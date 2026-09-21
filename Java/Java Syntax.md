---
sort: 2
---

# Java Syntax
Every line of code that runs in Java must be inside a class. The class name should always start with an uppercase first letter.

Note: Java is case-sensitive. `MyClass` and `myclass` would be treated as two completely different names.

The name of the Java file must match the class name. So if your class is called Main, the file must be saved as Main.java. This is because Java uses the class name to find and run your code. If the names don't match, Java will give an error and the program will not run.

## A basic Java program

```java
public class Main {
    public static void main(String[] args) {
        // This is the program's entry point.
        System.out.println("Hello, Java!");
    }
}
```

- `class Main` declares a class named `Main`.
- The `main` method is where a simple Java application starts.
- Curly braces `{}` mark the beginning and end of a class or method body.
- A semicolon `;` ends a statement, such as the `println` call.

## Statements

A statement is an instruction the program executes. For example, a declaration
creates a variable, an assignment updates it, and a method call performs an
operation:

```java
int score = 10;
score = score + 5;
System.out.println(score);
```

These are three separate statements, each ending with a semicolon.

Control-flow statements can choose or repeat work. Their bodies are grouped
with braces:

```java
if (score >= 10) {
    System.out.println("Score is at least 10");
}
```

## Comments

Comments explain code and are ignored by the compiler:

```java
// A single-line comment

/*
 * A comment that spans multiple lines.
 * Normally, we use // for short comments, and /* */ for longer.
 */
```

## Further reading

- [W3Schools: Java Syntax](https://www.w3schools.com/java/java_syntax.asp)
- [W3Schools: Java Statements](https://www.w3schools.com/java/java_statements.asp)
