---
sort: 8
---

# Java If ... Else

Conditional statements let a program choose which code to run based on a
boolean expression. The condition must evaluate to `true` or `false`.

## `if`, `else` and `else if`

Java has the following conditional statements:
- Use `if` to specify a block of code to be executed, if a specified condition is true
- Use `else` to specify a block of code to be executed, if the same condition is false
- Use `else if` to specify a new condition to test, if the first condition is false
- Use `switch` to specify many alternative blocks of code to be executed

### Syntax
```java
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if condition1 is false and condition2 is true
} else {
  // block of code to be executed if both conditions are false
}
```

Most often, conditions are created using comparison operators, like the ones below:

- Less than: `a < b`
- Less than or equal to: `a <= b`
- Greater than: `a > b`
- Greater than or equal to: `a >= b`
- Equal to: `a == b`
- Not equal to: `a != b`


## Short Hand If...Else (Ternary Operator)

There is also a short-hand if else, which is known as the ternary operator because it consists of three operands
For a simple choice between two values, the conditional (ternary) operator
`? :` can be used instead of assigning in an `if ... else`:

Syntax
```java
variable = (condition) ? expressionTrue :  expressionFalse;

```

The expression before `?` is the condition. The expression between `?` and
`:` is selected when true; the expression after `:` is selected when false.

### Nested Ternary (Optional)
You can nest ternary operators to handle more than two possible outcomes, but this can make your code harder to read

```java
int time = 22;
String message = (time < 12) ? "Good morning."
               : (time < 18) ? "Good afternoon."
               : "Good evening.";
System.out.println(message);
```

Tip: Use the ternary operator for short, simple choices. For longer or more complex logic, the regular if...else is easier to read.

## Nested conditions

An `if` statement can appear inside another conditional block. This is called
nesting:

```java
if (condition1) {
  // code to run if condition1 is true
  if (condition2) {
    // code to run if both condition1 and condition2 are true
  }
}
```

When possible, combine simple conditions with logical operators to reduce
unnecessary nesting.

## Logical conditions

Use logical operators to combine boolean expressions:

| Operator | Meaning |
|---|---|
| `&&` | Both conditions must be true |
| `\|\|` | At least one condition must be true |
| `!` | Reverses a boolean condition |


## Further reading

- [W3Schools: Java Conditions](https://www.w3schools.com/java/java_conditions.asp)
- [W3Schools: Java Conditions - Else](https://www.w3schools.com/java/java_conditions_else.asp)
- [W3Schools: Java Conditions - Else If](https://www.w3schools.com/java/java_conditions_elseif.asp)
- [W3Schools: Java Conditions - Shorthand If Else](https://www.w3schools.com/java/java_conditions_shorthand.asp)
- [W3Schools: Java Nested If](https://www.w3schools.com/java/java_conditions_nested.asp)
- [W3Schools: Java Logical Operators](https://www.w3schools.com/java/java_conditions_logical.asp)
