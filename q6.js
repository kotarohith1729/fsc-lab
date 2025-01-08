function Person(name, age) {
    this.name = name;  
    this.age = age;    
}
Person.prototype.ope = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};
function Student(name, age, grade) {
    Person.call(this, name, age);  
    this.grade = grade;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.ope1 = function() {
    console.log(`Grade: ${this.grade}`);
};
const person = new Person("John", 30);
person.ope();  
const student = new Student("John", 20, "A");
student.ope();  
student.ope1(); 
