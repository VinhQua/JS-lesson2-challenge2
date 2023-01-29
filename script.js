var mealCost = Number(prompt("Enter Meal Cost"));
var tip = Number(prompt("Enter tip (%)"))/100;
var tipAmount = mealCost * tip;
var total = mealCost + tipAmount;
var numOfPeople = Number(prompt('Enter The Number Of People'));
console.log(`Your meal cost is $${mealCost}, with the tip, it comes to 
$${total.toFixed(2)},. Your share is $${(total / numOfPeople).toFixed(2)}.`);
document.write(`Your meal cost is $${mealCost}, with the tip, it comes to 
$${total.toFixed(2)},. Your share is $${(total / numOfPeople).toFixed(2)}.`)
document.write(tip)