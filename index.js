//FINDING ARRAYS 


//Find elements using a simple condition with Array.prototype.indexOf()
console.log('Output using indexOf() method')
const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades']
console.log(cards.indexOf('jack of clubs'))
console.log(cards.indexOf('jack of hearts'))//doesn't exist
 
console.log(cards.indexOf('jack of clubs', 2));//element is after the starting position mentioned 
console.log(cards.indexOf('ace of spades', 2))

//Find elements using more complex conditions with Array.prototype.find()
function isEven(element, index , array){
    return (element%2 === 0)
}
//calling find() on the array we want
console.log('Output using find() method')
console.log([2,4,6,8,10,12].find(isEven));
console.log([1,3,5,7,9,11].find(isEven));// returns undefined if no matching element is found
console.log([1,4,3,5,7,9,11].find(isEven))
