---
sort: 12
---

# Java Arrays

Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. 

Each value is an element, identified by an index. Array indexes start at `0`, so the first element is at index `0` and the last is at `length - 1`.

To declare an array, define the variable type with square brackets [ ] :

## Declare and create an array

Declare the element type followed by `[]`. Create an array with `new` and its
size, or initialize it with values:

```java
int[] myNum = {10, 20, 30, 40};

String[] names = {"Ari", "Sam", "Lee"};

int[] scores = new int[3];
scores[0] = 85;
scores[1] = 92;
scores[2] = 78;

```

An array's size is fixed after creation. Elements have default values when the
array is created: numeric primitives are initialized to zero, `boolean`
elements to `false`, `char` elements to the null character, and reference
elements to `null`.

Read or update an element by index:

```java
System.out.println(names[0]); // Ari
names[1] = "Mina";
System.out.println(names.length); // 3
```

An index outside the range from `0` to `length - 1` causes an
`ArrayIndexOutOfBoundsException`.

## Loop through an array

You can loop through the array elements with the `for` loop, and use the `length` property to specify how many times the loop should run.

```java
int[] numbers = {1, 5, 10, 25};
int sum = 0;

// Loop through the array and add each element to sum
for (int i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

System.out.println("The sum is: " + sum);
```

### Loop Through an Array with For-Each
There is also a `"for-each"` loop, which is used exclusively to loop through elements in an `array (or other data structures)`:

```java
for (type variable : arrayname) {
  // code block to be executed
}

// Ex:
for (int score : scores) {
    System.out.println(score);
}
```

Note: The `for-each loop` is great when you only need to read elements. If you want to change the elements later, or keep track of their index, use a regular `for` loop instead.

## Multidimensional arrays

Java multidimensional arrays are arrays whose elements are themselves arrays.
A two-dimensional array can be used to represent rows and columns. To create a two-dimensional array, write each row inside its own `curly braces`.

```java
int[][] myNumbers = { {1, 4, 2}, {3, 6, 8} };
System.out.println(myNumbers[1][2]); // Outputs 8
```

Use nested loops to visit all elements:

```java
int[][] myNumbers = { {1, 4, 2}, {3, 6, 8, 5, 2} };

for (int[] row : myNumbers) {
  for (int num : row) {
    System.out.println(num);
  }
}
```


## Further reading

- [W3Schools: Java Arrays](https://www.w3schools.com/java/java_arrays.asp)
- [W3Schools: Java Arrays Loop](https://www.w3schools.com/java/java_arrays_loop.asp)
- [W3Schools: Java Multidimensional Arrays](https://www.w3schools.com/java/java_arrays_multi.asp)
