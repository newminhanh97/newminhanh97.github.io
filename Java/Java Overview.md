---
sort: 1
---

# Java Overview
## What is Java?

Java is a popular and powerful programming language, it is owned by Oracle.

It is used for:

- Mobile applications (specially Android apps)
- Desktop applications
- Web applications
- Web servers and application servers
- Games
- Database connection
- And much, much more! 

## Why Use Java?
- Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)
- It is one of the most popular programming languages in the world
- It has a large demand in the current job market
- It is easy to learn and simple to use
- It is open-source and free
- It is secure, fast and powerful
- It has huge community support (tens of millions of developers)
- Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs
- As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa

## How Java runs

Java source code is compiled into bytecode. A Java Virtual Machine (JVM) runs
that bytecode, allowing the same compiled program to run on different operating
systems that have a compatible JVM.

The Java Development Kit (JDK) is what you install to develop Java programs. It
includes the compiler and tools for building and running applications.

## Get started

1. Install a JDK from a trusted distribution, such as [Oracle
   JDK](https://www.oracle.com/java/technologies/downloads/) or
   [Eclipse Temurin](https://adoptium.net/).
2. Open a terminal and verify the installation:

   ```sh
   java --version
   ```

3. Create a file named `Main.java` with this program:

   ```java
   public class Main {
       public static void main(String[] args) {
           System.out.println("Hello, Java!");
       }
   }
   ```

4. From the folder containing the file, compile and run it:

   ```sh
   javac Main.java
   java Main
   ```

The output should be:

```text
Hello, Java!
```

In Java, every application begins with a `class name`, and that class must match the `filename`.

## Further reading

- [W3Schools: Java Introduction](https://www.w3schools.com/java/java_intro.asp)
- [W3Schools: Java Get Started](https://www.w3schools.com/java/java_getstarted.asp)
- [Official Java downloads](https://www.oracle.com/java/technologies/downloads/)
