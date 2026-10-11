/*
Union Types

Union types allow a variable, function parameter, or object property
to accept one of multiple specified types using the '|' operator.

They help us avoid using 'any' when we know which types are allowed.
*/

// Example 1: Variable with multiple allowed types

let userId: string | number;

userId = 101;
userId = "USER101";

// userId = true; // Error: boolean is not assignable

// Example 2: Union type in a function parameter

function getUser(id: string | number) {
  console.log("Fetching user with ID:", id);
}

getUser(101);
getUser("USER101");

// Example 3: Union type in an object property

type Product = {
  name: string;
  price: string | number;
};

const product: Product = {
  name: "Keyboard",
  price: 1499,
};

//Union type will only allow the operations to perform that are valid on both the selected type
/* 
  lets say you have id : number | string as param in function 
  so in that function it wont allow directly id.toLowerCase() 
  we should first determine the typeof id and then perform the operations.
*/
function printPrice(price: string | number) {
  if (typeof price === "number") {
    console.log(price.toFixed(2));
  } else {
    console.log(price.toUpperCase());
  }
}

//Arrays

const array1: number[] = [1, 2, 3];
const array2: string[] = ["Pranav", "Shirsat"];

// const array3: number | string[] = [1, 2, "Prnava"];
/* The above array3 will give an error because it will consider as string[]
So for solution some one will write it as number[] | string[]
but this is also not completely correct because this will either accept 
all values of array3 as numbers or as strings not combination of both
In order to accept the combination of both, we should write it as below
*/
const array3: (number | string)[] = [1, 2, "Pranav Shirsat"];
//Now the above array3 will accept both number and string
