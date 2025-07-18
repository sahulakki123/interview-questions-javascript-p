// Q .1  Ask the user of their age and if it is greater than or equals to 18 with ternory operator and display the result in alert.

let age=parseInt(prompt("Enter your age"))

let msg=(age>=18) ? "You are adult " : "You are minor"
alert(msg)

// Q.2  Ask the user if they have completed a course and have a certificate by (confirm) if both ok then give a "complated" message by Alert otherwise "not completed".

let course=confirm("if you have completed a course if u  have a certificate")
if (course){
    alert("Congratulations you have completed the course")
}
else{
    alert(" You are course is not completed")
}


// Q 3  Ask the user for the price of an item and (confirm) whether they have a discount coupon. apply a 10 % discount if they confirm.

let price = parseInt(prompt("Enter the total price of your item "))
let coupon = confirm("You have a discount coupon")

if (coupon){
    let discount = price*(10/100)
    let discountPrice =price-discount
    alert(`You original price is ${price} and discount price is ${discount} `)
}
else{
    alert("You have not vailid discount coupon")
}



// Q 4  Ask the user for their exam score and delerine if they passed or faild .(Above 33 pass).

let num = parseInt(prompt("Enter your number"))
if (num >33){
    alert("Congratulations you have passed")
}
else{
    alert(`Bad luck 'Result is failed'`)
}


// Q. 5  Check Entered number is even or odd.

let number = parseInt(prompt("Enter the number"))

if (number%2 == 0){
    alert(`number ${number} is even`)
}
else(
    alert(`number ${number} is odd`)
)



// Q. 6 Ask for conformation " Are you sure to delete" if ok give message "Item Deleted" otherwise "Cancelled".

let conformation = confirm("Are you sure to delete the item")

if (conformation){
    alert("Item deleted")
}
else{
    alert("Canceelled")
}



// Q. 7  Check Enter number is Positive or Negative.

let num1 = parseInt(prompt("Enter the number"))

if (num1>0){
    console.log(`number ${num1} is positive `);
}
else if(num1 == 0){
    console.log(`number ${num1} is neutral number`);
}
else{
    console.log(`number ${num1} is negative`);
    
}


// Q. 8  Print 1-10 number in consol by while loop.

let n = 1
while(n<=10){
    console.log(n);
    n++
}


// Q. 9 






// Q. 10 Ask the user to enter a day of the week (1 for monday, 2 for Tuesday, etc.)
// and display the name of the day. by switch case .

let day = parseInt(prompt("please enetre day number"))

switch (day) {
    case 1:
        alert("Today is Monday")
        break;
    case 2:
        alert("Today is Tusaday")
        break;

    case 3:
        alert("Today is Wednesday")
        break;

    case 4:
        alert("Today is Thursday ")
        break;

    case 5:
        alert("Today is Friday")
        break;

    case 6:
        alert("Today is Saturday")
        break;

    case 7:
        alert("Today is Sunday")
        break;

    default:
        alert("Invailid day")
        break;
}


// 11 merge two Array
// merge [1,2,3] and [4,5,6,] into a new array without ushing . concat()

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [];

for (let num of arr1) {
    merged.push(num);
}
for (let num of arr2) {
    merged.push(num);
}
console.log("Merged Array:", merged);
