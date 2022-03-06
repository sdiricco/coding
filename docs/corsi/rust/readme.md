# Rust

![rust](./images/rust.jpg)

## Installa Rust

Puoi installare rust per il tuo sistema operativo dalla [pagina ufficiale](https://www.rust-lang.org/it/tools/install)

Una volta installato verifica che la toolchain, il compilatore e il package manager siano raggiungibili da terminale

- **rustup**: Rust toolchain
- **rustc**: Rust compiler
- **cargo**: package manager

=== ":octicons-terminal-16: rustup"

    ```javascript
    rustup --version
    ```

=== ":octicons-terminal-16: rustc"

    ```javascript
    rustc --version
    ```

=== ":octicons-terminal-16: cargo"

    ```javascript
    cargo --version
    ```


## Hello Rust!

Stampa il tuo primo **Hello World** con Rust.

=== ":fontawesome-brands-rust: main.rs"

    ```rs
    fn main(){
        println!("Hello World!")
    }
    ```

=== ":octicons-terminal-16: compila"

    ```sh
    rustc ./main.rs
    ```

=== ":octicons-terminal-16: esegui"

    ```sh
    ./main
    ```

=== ":octicons-terminal-16: output"

    ```sh
    Hello World
    ```

## Inizializza un progetto con cargo

Puoi inizializzare un progetto `rust` con: 

```sh
cargo init
```

Creerà un file `Cargo.toml`

```toml
[package]
name = "rustlang"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
```

E una cartella `src` con l'entry file rust `main.rs`

Puoi lanciare l'applicazione di esempio con il comando

```sh
cargo run
```

Che compilerà, creerà una cartella `target` ed eseguirà il binario `target/rustlang.exe`. 
Il nome dell'eseguibile viene preso dal file di configurazione di progetto `Cargo.toml` 

Per compilare un progetto

```sh
cargo build
```

E per produrre una versione ottimizzata per la produzione:

```sh
cargo build --release
```

Troverai l'eseguibile in `target/release`

## Moduli Rust

Puoi definire un modulo rust e importarlo all'interno del main con una sintassi semplice

```rust
//print.rs
pub fn run(){
    println!("hello world from print.rs file");
}
```

```rust
//main.rs
mod print;

fn main() {
    print::run();
}
```

## Tutto sulle print

- Basic Formatting
- Positional Arguments
- Named Arguments
- Placeholder traits
- Placeholder for debug trait
- Basic math

```rust
pub fn run() {
  // Print to console
  println!("Hello from the print.rs file");

  // Basic Formatting
  println!("{} is from {}", "Brad", "Mass");

  // Positional Arguments
  println!(
    "{0} is from {1} and {0} likes to {2}",
    "Brad", "Mass", "code"
  );

  // Named Arguments
  println!(
    "{name} likes to play {activity}",
    name = "John",
    activity = "Baseball"
  );

  // Placeholder traits
  println!("Binary: {:b} Hex: {:x} Octal: {:o}", 10, 10, 10);

  // Placeholder for debug trait
  println!("{:?}", (12, true, "hello"));

  // Basic math
  println!("10 + 10 = {}", 10 + 10);
}
```

## Le variabili

- Variables hold primitive data or references to data
- Variables are immutable by default
- Rust is a block-scoped language

```rust


pub fn run() {
  let name = "Brad";
  let mut age = 37;
  println!("My name is {} and I am {}", name, age);
  age = 38;
  println!("My name is {} and I am {}", name, age);

  // Define constant
  const ID: i32 = 001;
  println!("ID: {}", ID);

  // Assign multiple vars
  let ( my_name, my_age ) = ("Brad", 37);
  println!("{} is {}", my_name, my_age );
}
```

## I tipi

Rust is a statically typed language, which means that it must know the types of all variables at compile time, however, the compiler can usually infer what type we want to use based on the value and how we use it

- **Integers**: `u8`, `i8`, `u16`, `i16`, `u32`, `i32`, `u64`, `i64`, `u128`, `i128`
- **Floats**: `f32`, `f64`
- **Boolean**: `bool`
- **Characters**: `char`
- **Tuples**
- **Arrays**



```rust
pub fn run() {
  // Default is "i32"
  let x = 1;

  // Default is "f64"
  let y = 2.5;

  // Add explicit type
  let z: i64 = 4545445454545;

  // Find max size
  println!("Max i32: {}", std::i32::MAX);
  println!("Max i64: {}", std::i64::MAX);

  // Boolean
  let is_active: bool = true;

  // Get boolean from expression
  let is_greater: bool = 10 < 5;

  let a1 = 'a';
  let face = '\u{1F600}';

  println!("{:?}", (x, y, z, is_active, is_greater, a1, face));
}
```

## Strings

- Primitive str = Immutable fixed-length string somewhere in memory
- String = Growable, heap-allocated data structure - Use when you need to modify or own string data

```rust
pub fn run() {
  let mut hello = String::from("Hello ");

  // Get length
  println!("Length: {}", hello.len());

  // Push char
  hello.push('W');

  // Push string
  hello.push_str("orld!");

  // Capacity in bytes
  println!("Capacity: {}", hello.capacity());

  // Check if empty
  println!("Is Empty: {}", hello.is_empty());

  // Contains
  println!("Contains 'World' {}", hello.contains("World"));

  // Replace
  println!("Replace: {}", hello.replace("World", "There"));

  // Loop through string by whitespace
  for word in hello.split_whitespace() {
    println!("{}", word);
  }

  // Create string with capacity
  let mut s = String::with_capacity(10);
  s.push('a');
  s.push('b');

  // Assertion testing
  assert_eq!(2, s.len());
  assert_eq!(10, s.capacity());

  println!("{}", s);
}
```

## Tuples

- Tuples group together values of different types
- Max 12 elements

```rust
pub fn run() {
  let person: (&str, &str, i8) = ("Brad", "Mass", 37);

  println!("{} is from {} and is {}", person.0, person.1, person.2);
}
```

## Arrays

- Arrays - Fixed list where elements are the same data types

```rust
use std::mem;

pub fn run() {
  let mut numbers: [i32; 4] = [1, 2, 3, 4];

  // Re-assign value
  numbers[2] = 20;

  println!("{:?}", numbers);

  // Get single val
  println!("Single Value: {}", numbers[0]);

  // Get array length
  println!("Array Length: {}", numbers.len());

  // Arrays are stack allocated
  println!("Array occupies {} bytes", mem::size_of_val(&numbers));

  // Get Slice
  let slice: &[i32] = &numbers[1..3];
  println!("Slice: {:?}", slice);
}
```

## Vectors

- Vectors - Resizable arrays

```rust
use std::mem;

pub fn run() {
  let mut numbers: Vec<i32> = vec![1, 2, 3, 4];

  // Re-assign value
  numbers[2] = 20;

  // Add on to vector
  numbers.push(5);
  numbers.push(6);

  // Pop off last value
  numbers.pop();

  println!("{:?}", numbers);

  // Get single val
  println!("Single Value: {}", numbers[0]);

  // Get vector length
  println!("Vector Length: {}", numbers.len());

  // Vectors are heap allocated
  println!("Vector occupies {} bytes", mem::size_of_val(&numbers));

  // Get Slice
  let slice: &[i32] = &numbers[1..3];
  println!("Slice: {:?}", slice);

  // Loop through vector values
  for x in numbers.iter() {
    println!("Number: {}", x);
  }

  // Loop & mutate values
  for x in numbers.iter_mut() {
    *x *= 2;
  }

  println!("Numbers Vec: {:?}", numbers);
}
```

## Costrutti condizionali

- Used to check the condition of something and act on the result

```rs
pub fn run() {
  let age: u8 = 22;
  let check_id: bool = true;
  let knows_person_of_age = true;

  // If/Else
  if age >= 21 && check_id || knows_person_of_age {
    println!("Bartender: What would you like to drink?");
  } else if age < 21 && check_id {
    println!("Bartender: Sorry, you have to leave");
  } else {
    println!("Bartender: I'll need to see your ID");
  }

  // Shorthand If
  let is_of_age = if age >= 21 { true } else { false };
  println!("Is Of Age: {}", is_of_age)
}
```

## Loops

Used to iterate until a condition is met

### Infinite Loop

```rs
pub fn run() {
  let mut count = 0;

  // Infinite Loop
  loop {
    count += 1;
    println!("Number: {}", count);

    if count == 20 {
      break;
    }
  }
```

### While Loop

```rs
pub fn run() {
  let mut count = 0;

  // While Loop (FizzBuzz)
  while count <= 100 {
    if count % 15 == 0 {
      println!("fizzbuzz");
    } else if count % 3 == 0 {
      println!("fizz");
    } else if count % 5 == 0 {
      println!("buzz")
    } else {
      println!("{}", count);
    }

    // Inc
    count += 1;
  }
```

### For Range

```rs
pub fn run() {
  // For Range
  for x in 0..100 {
    if x % 15 == 0 {
      println!("fizzbuzz");
    } else if x % 3 == 0 {
      println!("fizz");
    } else if x % 5 == 0 {
      println!("buzz")
    } else {
      println!("{}", x);
    }
  }
}

```