---
sort: 11
---

# Java Break and Continue

The `break` and `continue` statements change the normal flow of a loop.

## `break`

The `break` was used to "jump out" of a `switch` or `loop` statement

```java
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  System.out.println(i); // Output: print from 0 t0 4
}
```


## `continue`

The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

```java
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  System.out.println(i); // Output: from 0 to 10 but not incude 4
}
```

- `break` = stop the loop completely.
- `continue` = skip this round, but keep looping.


```java
int[] numbers = {3, -1, 7, 0, 9};

for (int n : numbers) {
  if (n < 0) {
    continue; // skip negative numbers
  }
  if (n == 0) {
    break; // stop loop when zero is found
  }
  System.out.println(n);
}
```


## Further reading

- [W3Schools: Java Break and Continue](https://www.w3schools.com/java/java_break.asp)
