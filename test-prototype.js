var Person = function() {
  this.canTalk = true
}

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name)
  }
}

var Employee = function(name, title) {
  Person.call(this)
  this.name = name
  this.title = title
}

Employee.prototype = Object.create(Person.prototype)
Employee.prototype.constructor = Employee

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title)
  }
}

var bob = new Employee('Bob', 'Builder')

bob.greet()