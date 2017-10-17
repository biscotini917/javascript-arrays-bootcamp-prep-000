//define a variable called chocolateBars. Its value should be an array of the strings snickers, hundred grand, kitkat, and skittles
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

//define 2 functions - take 2 parameters - array, element to beginning
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
//two arguments, add to the end of the array
function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)

  return array
}
//function should accept an array and index, return the element at the index
function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()

  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()

  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
