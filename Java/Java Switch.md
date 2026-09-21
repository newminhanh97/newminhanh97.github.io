---
sort: 9
---

# Java Switch

Instead of writing many if..else statements, you can use the switch statement. The switch statement selects one of many code blocks to be executed

Syntax
```java
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

This is how it works:
- The `switch` expression is evaluated once.
- The result is compared with each `case` value.
- If there is a match, the matching block of code runs.
- The `break` statement stops the switch after the matching case has run.
- The `default` statement runs if there is no match.


## When to use switch

Use `switch` when one expression is matched against a set of discrete
alternatives. Use `if ... else` when the branches depend on ranges, multiple
unrelated conditions, or more complex boolean logic.

## Further reading

- [W3Schools: Java Switch](https://www.w3schools.com/java/java_switch.asp)
