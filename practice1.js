/* let tempNumber1 = 5;
let tempNumber2=7
let name = ' Varun '
let judge = false;
let a;

if  (judge) {
    let newTemp = 6;
    a= "Magic";
    a="10";
    console.log(name, tempNumber1, newTemp, tempNumber2, a);
    console.log("It is working");
    } else { console.log(tempNumber2);
        console.log("Error in Working");
    }
 */


  /*   const student = {
        fullName: "Varun Talwar",
        marks: 50,
        age: 38,
        college: "Apna College",
        pass: true
    };

    let newYear= true;

    console.log(student.fullName, student.age);

    if(newYear){
        
        
        console.log(++student.age);
        student.fullName= "Gandu Aadmi";
        
        console.log(student.age, student.fullName);

    } else{ console.log(student.age, student.fullName)}

    console.log(student.fullName, student.age); */
    

    /* onclick.console.log(student["fullName"]); */


  /*   for(let i=0; i<=100; i++){
        if(i%2==0){
            console.log("i=", i, "Its is Even")
        }
    }; */
/* 
    let gameNum=25;
    let userNum= prompt(" Guess the Game Number:");
        if( gameNum==userNum)
        { console.log("You are Correct, the Number is :", gameNum)

        } else {
            while (gameNum!= userNum)
                {
                let userNum= prompt(" Guess the Game Number:");
                console.log(userNum);
                    if (gameNum==userNum){
                        console.log("You are correct, the number is :", gameNum);
                        break;
                    } else { console.log("Try Again")};
                }
            } */



/* let gameNum=25;
let userNum= prompt(" Guess the Game Number:");

while (userNum!= gameNum){
    userNum= prompt("You entered wrong number. Guess Again:");
}

console.log("Congratulations, you entered the right number!!!"); */



/*--------------------------------------------------------------------------------------------*/




/* const sales = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 }
];
function calculateTotalSales(sales) {
    let total = 0;
    for (let i = 0; i < sales.length; i++) {
        total += sales[i].quantity * sales[i].price;
    }
    return total;
}
console.log("Total Sales Amount:", calculateTotalSales(sales)); */

/* const orders = [
    { item: "Espresso", quantity: 2, price: 3.5 },
    { item: "Latte", quantity: 3, price: 4.0 },
    { item: "Cappuccino", quantity: 1, price: 4.5 }
];
function generateReceipt(orders) {
    let grandTotal = 0;
    console.log("Receipt:");
    console.log("----------------------");
    for (let i = 0; i < orders.length; i++) {
        const itemTotal = orders[i].quantity * orders[i].price;
        grandTotal += itemTotal;
        console.log(`${orders[i].item} - Quantity: ${orders[i].quantity}, Price: $${orders[i].price}, Total: $${itemTotal}`);
    }
    console.log("----------------------");
    console.log(`Grand Total: $${grandTotal}`);
}
generateReceipt(orders); */

/* const passwords = ["Password123", "short", "ValidPass123", "too_long_password_example", "12345"];
function validatePasswords(passwords) {
    const regex = /^[a-zA-Z0-9]{8,20}$/;
    for (let i = 0; i < passwords.length; i++) {
        if (regex.test(passwords[i])) {
            console.log(`${passwords[i]} is valid.`);
        } else {
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}
validatePasswords(passwords); */

/* const products = [
    { product: "Laptop", stock: 5 },
    { product: "Headphones", stock: 0 },
    { product: "Smartphone", stock: 3 }
];
function checkStockLevels(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].stock > 0) {
            console.log(`${products[i].product} is In Stock.`);
        } else {
            console.log(`${products[i].product} is Out of Stock.`);
        }
    }
}
checkStockLevels(products);  */