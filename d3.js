/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

let firstFive = [1, 2, 3, 4, 5];

console.log(firstFive);

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const myDetails = {
  name: 'abdulkadir',
  surname: 'salad',
  email: 'abdul123@gmail.com',
  age: 21,
};

console.log(myDetails);

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

myDetails.drivingLicense = true;

console.log(myDetails);

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete myDetails.age;

console.log(myDetails);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let myDetails2 = {
  name: 'salad',
  surname: 'abdulkadir',
  email: 'salad123@gmail.com',
};
console.log(myDetails2.email !== myDetails.email);

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 5;

if (totalShoppingCart > 50) {
  console.log(
    `${totalShoppingCart} (Congrats!! This order is eligible for free shipping)`
  );
} else {
  // prettier-ignore
  console.log(
    `${totalShoppingCart + 10} (There is a 10 delivery charge included for this transaction.)`
  );
}

// let totalShoppingCart = 45;
// if (totalShoppingCart <= 50)
//     totalShoppingCart += 10

// console.log(totalShoppingCart)
// Easier way and quicker too!

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

totalShoppingCart = 10;

if (totalShoppingCart >= 50) {
  console.log(totalShoppingCart * 0.8);
} else {
  console.log((totalShoppingCart + 10) * 0.8);
}

// totalShoppingCart = 40;
// if (totalShoppingCart <= 50)
// totalShoppingCart += 10;

// let discount = totalShoppingCart * 0.2;

// totalShoppingCart = totalShoppingCart - discount;

// console.log(totalShoppingCart);

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

const car1 = {
  brand: 'nissan',
  model: 'note',
  licencePlate: 'first car',
  color: 'black',
};

car2 = Object.assign({}, car1);

car2.licencePlate = 'BR14 FGH';

car3 = Object.assign({}, car1);

car3.licencePlate = 'BR15 4DR';

car4 = Object.assign({}, car1);

car4.licencePlate = 'BR16 NSG';

car5 = Object.assign({}, car1);

car5.licencePlate = 'last car';

console.log(car5);

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car1, car2, car3, car4, car5];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.pop();
console.log(carsForRent);
carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(car1.brand, car1.model, car1.licencePlate);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [
  {
    brand: 'nissan',
    model: 'note',
    licencePlate: 'FG19 FG4',
    color: 'black',
  },
  {
    brand: 'Mercedes',
    model: 'AMG',
    licencePlate: 'FR19 5GH',
    color: 'black',
  },
  {
    brand: 'Chevrolet',
    model: 'malibu',
    licencePlate: 'DE19 DR1',
    color: 'black',
  },
];
let totalCars = {
  carsForSale: carsForSale.length,
  carsForRent: carsForRent.length,
};

console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale[0].licencePlate);
console.log(carsForSale[1].model);
console.log(carsForSale[2].brand);

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
