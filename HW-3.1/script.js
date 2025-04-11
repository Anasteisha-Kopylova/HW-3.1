let age = 30
console.log(typeof age)

let value
console.log(typeof value)

let name = 'Anastasiia'
console.log(typeof name)

const bigNumber = 1234567890123456789012345678901234567890n
console.log(typeof bigNumber)

const emptyValue = null
console.log(emptyValue)

const personId = Symbol ('description')
console.log(typeof personId)

let person = {
    name: 'Anastasiia',
    age: 28,
    sayHello: function() {
        console.log('Hello, ' + this.name);
    }
}
console.log(typeof person)

function greet() {
    return "Hello";
  }
  console.log(typeof greet)

  let isActive = true
  console.log(typeof isActive)

  let numbers = [1, 2, 3]
    console.log(typeof numbers)
