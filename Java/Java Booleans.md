---
sort: 7
---

# Java Booleans

The primitive type `boolean` represents a value that is either `true` or
`false`. Boolean variables are useful for recording a yes-or-no state and for controlling conditional logic.

```java
boolean isLoggedIn = true;
boolean hasMessages = false;
```

## Comparisons

Comparison operators evaluate to `true` or `false`:

| Operator | Meaning |
|---|---|
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

```java
int x = 10;
int y = 9;

boolean isGreater = x > y;

System.out.println(isGreater); // Outputs true
```

```java
int myAge = 25;
int votingAge = 18;

if (myAge >= votingAge) {
  System.out.println("Old enough to vote!");
} else {
  System.out.println("Not old enough to vote.");
}
```

## Combine conditions

Logical operators combine or invert boolean expressions:

| Operator | Meaning |
|---|---|
| `&&` | True when both expressions are true |
| `||` | True when at least one expression is true |
| `!` | Inverts a boolean value |


The `&&` and `||` operators use short-circuit evaluation: Java may skip
evaluating the right-hand expression when the left side already determines the result.

## Use booleans in real programs

For example, an application could use boolean conditions to decide whether a
user may borrow an item:

```java
boolean accountIsActive = true;
int itemsBorrowed = 2;
int borrowingLimit = 5;

boolean canBorrow = accountIsActive && itemsBorrowed < borrowingLimit;

if (canBorrow) {
    System.out.println("Borrowing is allowed.");
} else {
    System.out.println("Borrowing is not allowed.");
}
```

Keep boolean expressions readable. If a condition becomes difficult to follow, store parts of it in descriptively named boolean variables.

## Further reading

- [W3Schools: Java Booleans](https://www.w3schools.com/java/java_booleans.asp)
- [W3Schools: Java Booleans in Real Life](https://www.w3schools.com/java/java_booleans_reallife.asp)
