// task1. name, age və doing() fieldlarından ibarət 3 ədəd insan objecti yaradın. 
let TheMostDishonourableNumber1 = {
    name: 'Benjamin Netanyahu',
    age: 73,
    doing: function () { 'kills people which live in countries of muslims' }
}
let TheMostDishonourableNumber2 = {
    name: 'Joe Biden',
    age: 80,
    doing: function () { 'killing humanity' }
}
let TheMostDishonourableNumber3 = {
    name: 'sionism',
    age: 68,
    doing: function () { 'kills spirit of muslims...' }
}
console.log(TheMostDishonourableNumber1.doing)
console.log(TheMostDishonourableNumber2.doing)
console.log(TheMostDishonourableNumber3.doing)
// -------------------------------------------
console.log(TheMostDishonourableNumber1)

console.log(TheMostDishonourableNumber2)
console.log(TheMostDishonourableNumber3)
// --------------------------------------------
// task2.  deleteProperty(propertyName, obj) ->  verdiyimiz obyektden adini verdiyimiz property-ni silmek
delete TheMostDishonourableNumber1.doing
delete TheMostDishonourableNumber2.doing
delete TheMostDishonourableNumber3.doing
// --------------------------------------------
// task4. deepClone(obj1, obj2) -> obj1deki butun propertyleri obj2ye menimsetsin
let TheMostDishonourableNumber4 = TheMostDishonourableNumber3
console.log(TheMostDishonourableNumber4)