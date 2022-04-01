///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be
    creating customer objects.
*/


//////////////////PROBLEM 1////////////////////
/*
    Below is a cart array that has food objects
    inside.

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food.
*/

const cart = [
    {
        name: 'pizza',
        price: 9.99
    },
    {
        name: 'pasta',
        price: 8.99
    },
    {
        name: 'salad',
        price: 7.99
    }
]



const summedPrice = cart.map(item => item.price).reduce((acc, curr) => acc + curr);
// console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments.

    Inside the function, calculate the tax
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number.

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal * (1 + tax) - couponValue;
}

console.log(calcFinalPrice(50, 5, .05));


//////////////////PROBLEM 3////////////////////
/*
    In this problem, you'll create a model for
    a customer object as well as an example
    object.

    Plan out a customer object for the cart page.
    Think about the information that a
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types.

    Your object should have at least 4 properties.
*/

/*
    firstName - identification purposes, string - because it is storing text;
    lastName - identification purposes, string - because it is storing text;
    email - contact information, string - because it is storing text;
    phoneNumber - contact information, number - phone number is a sequence of numbers;
    address - used for delivery/billing, string - storing a text;

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    firstName: 'Flora',
    lastName: 'Remora',
    email: 'floraremora@gmail.com',
    phoneNumber: 5551234,
    address: '555 thisway st'
};
console.log(customer);
