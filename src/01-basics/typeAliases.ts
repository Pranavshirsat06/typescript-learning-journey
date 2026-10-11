/*
Type aliases allowes us to define the variable structure once and use it multiple times in 
multiple function definitions.
Example is below 
*/

//I defined the user with a specific properties that I want in User
type User = {
  name: string;
  age: number;
  isPaid: boolean;
  isAdmin: boolean;
  /* 
    let say we want to keep another property here which needs to be the optional one 
    let say email then we can simply keep that here with ? 'optional properties'
  */
  email?: string; //Now this becomes the optional one, we can define in which func call, we need to pass this
};

//This function def says register new user in which it takes user as param
//so I said the accepted user must be of type User which is defined above and this should return User properties only
function registerNewUser(user: User) {
  return {
    name: user.name,
    age: user.age,
    isPaid: user.isPaid,
    isAdmin: user.isAdmin,
  };
}

const newUser = {
  name: "Pranav Shirsat",
  age: 22,
  isPaid: false,
  isAdmin: false,
};
console.log(registerNewUser(newUser));

//Example 2
/*
  Want to accept the user and just register it with new user id
  Will use the above User type only 
*/

type registeredUser = User & {
  userId: number;
};

//This function basically says that it will accept the user of type User and
//will return the id of user through registeredUser type.
function registerNewUserWithId(user: User): registeredUser {
  return {
    ...user,
    userId: 1106,
  };
}

console.log("User with ID", registerNewUserWithId(newUser));

//ReadOnly keyword - this Keyword allows us to mark some properties as ReadOnly only means we cant change them
//Example
type User2 = {
  readonly id: string; //this basically says that id is readonly only, we wont be able to change that
  name: string;
  email: string;
  contact: number;
};

//If we try to change it by following means then it will throw an error
let myUser2: User2 = {
  id: "1212",
  name: "Pranav",
  email: "pranav@gmail.com",
  contact: 213231121,
};
// myUser2.id = "121311"  this will give error as we are updating the readonly property id.
