// ==========================================
// 1. NUMBER
// ==========================================

// TypeScript uses 'number' for integers, decimals, and other numeric values.
// Unlike some other languages, it does not have separate 'int' and 'float' types.

const pranavAge: number = 22;

console.log(pranavAge);

const userID: number = 1.5454;

// Decimal values are also supported by the number type.
console.log(userID);

// We can use JavaScript's built-in number methods.
const price: number = 199.99;

console.log(price.toFixed(1)); // "200.0"

// ==========================================
// 2. BOOLEAN
// ==========================================

// The boolean type represents true or false values.

const isLoggedIn: boolean = true;
const isLoggedOut: boolean = false;

console.log(isLoggedIn);
console.log(isLoggedOut);

// ==========================================
// 3. STRING
// ==========================================

// The string type represents textual data.

const userName: string = "Pranav";
const greeting: string = `Hello, ${userName}!`;

console.log(userName);
console.log(greeting);

// ==========================================
// 4. TYPE INFERENCE
// ==========================================

// TypeScript can infer a variable's type from its initial value.
// We don't always need to explicitly specify the type.

let courseName = "TypeScript";

// TypeScript infers that courseName is a string.
console.log(courseName);

// courseName = 123; // TypeScript error: number is not assignable to string.

// ==========================================
// 5. FUNCTIONS
// ==========================================

// We can specify the types of function parameters and return values.

function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(10, 20));

// A function returning a string.

function greetUser(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greetUser("Pranav"));

// A function that does not return a value uses void.

function printMessage(message: string): void {
  console.log(message);
}

printMessage("Learning TypeScript!");

// ==========================================
// 6. OPTIONAL PARAMETERS
// ==========================================

// Adding '?' makes a parameter optional.
// Optional parameters must come after required parameters.

function introduceUser(name: string, city?: string): string {
  if (city) {
    return `${name} is from ${city}.`;
  }

  return `${name}'s city is not specified.`;
}

console.log(introduceUser("Pranav", "Mumbai"));
console.log(introduceUser("Pranav"));
