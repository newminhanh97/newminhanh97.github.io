---
sort: 5
---

# Java Operators

The + operator is often used to:
- Add together two values
- Add together a variable and a value
- Add together a variable and another variable

```java
int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)
```
## Arithmetic operators

Arithmetic operators perform calculations:

| Operator | Operation | Example |
|---|---|---|
| `+` | Addition | x + y |
| `-` | Subtraction | x - y |
| `*` | Multiplication | x * y |
| `/` | Division | x / y |
| `%` | Modulus/Remainder | x % y |
| `++` | Increment by one | ++x |
| `--` | Decrement by one | --x |

```java
int x = 10;
int y = 3;
System.out.println(x + y); // 13
System.out.println(x - y); // 7
System.out.println(x * y); // 30
System.out.println(x / y); // 3
System.out.println(x % y); // 1

int z = 5;
++z;
System.out.println(z); // 6
--z;
System.out.println(z); // 5
```

Note: When dividing two integers in Java, the result will also be an integer. For example, `10 / 3 gives 3`. If you want a decimal result, use double values, like `10.0 / 3`.

```java
int a = 10;
int b = 3;
System.out.println(a / b);   // Integer division, result is 3

double c = 10.0d;
double d = 3.0d;
System.out.println(c / d);   // Decimal division, result is 3.333...
```
### Incrementing and Decrementing
Incrementing and decrementing are very common in counters, loops, and arrays. The ++ operator increases a value by 1, while the -- operator decreases a value by 1.

```java
int x = 5;
++x; // Increment x by 1 (x becomes 6)
--x; // Decrement x by 1 (x becomes 5 again)
System.out.println(x); // 5
```

## Assignment operators

Assignment operators are used to assign values to variables.

| Operator | Equivalent form |
|---|---|
| `x += y` | `x = x + y` |
| `x -= y` | `x = x - y` |
| `x *= y` | `x = x * y` |
| `x /= y` | `x = x / y` |
| `x %= y` | `x = x % y` |
| `x &= y` | `x = x & y` |
| `x ^= y` | `x = x ^ y` |
| `x <<= n` | `x = x << n` |
| `x >>= n` | `x = x >> n` |
| `x >>>= n` | `x = x >>> n` |

The bitwise OR assignment operator is `|=`; for example, `flags |= mask`
combines the bits in `flags` and `mask`, then stores the result in `flags`.

For example:

```java
int total = 10;
total += 4; // total is now 14
```

## Comparison operators

Comparison operators compare two values and return `true` or `false`:

| Operator | Meaning |
|---|---|
| `==` | Equal to |
| `!=` | Not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

```java
int age = 18;
System.out.println(age >= 18); // true, old enough to vote
System.out.println(age < 18);  // false
```

## Logical operators

Logical operators combine or reverse boolean expressions:

| Operator | Meaning | Example |
|---|---|---|
| `&&` | Logical and: is true when both conditions are true| x < 5 &&  x < 10.
| `\|\|` | 	Logical or: is true when at least one condition is true| x < 5 || x < 4 |
| `!`| Logical not: reverses a boolean value| !(x < 5 && x < 10)|


```java
if (name != null && name.length() > 0) {
    System.out.println(name);
}
```

## Operator precedence

Precedence determines which operators are evaluated first. From higher to
lower precedence. Order of Operations:

- `()` - Parentheses
- `*, /, %` - Multiplication, Division, Modulus
- `+, -` - Addition, Subtraction
- `>, <, >=, <=` - Comparison
- `==, !=` - Equality
- `&&` - Logical AND
- `||` - Logical OR
- `=` - Assignment

```java
int result1 = 10 - 2 + 5;    // (10 - 2) + 5 = 13
int result2 = 10 - (2 + 5);  // 10 - 7 = 3

System.out.println(result1);
System.out.println(result2);
```

Use parentheses to make the intended order explicit:

```java
int result = (2 + 3) * 4; // 20
```

## Further reading

- [W3Schools: Java Operators](https://www.w3schools.com/java/java_operators.asp)
- [W3Schools: Java Arithmetic Operators](https://www.w3schools.com/java/java_operators_arithmetic.asp)
- [W3Schools: Java Assignment Operators](https://www.w3schools.com/java/java_operators_assign.asp)
- [W3Schools: Java Comparison Operators](https://www.w3schools.com/java/java_operators_comparison.asp)
- [W3Schools: Java Logical Operators](https://www.w3schools.com/java/java_operators_logical.asp)
- [W3Schools: Java Operator Precedence](https://www.w3schools.com/java/java_operators_precedence.asp)