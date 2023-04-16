"use strict"
import Person from './model/person';
import Employee from './model/employee.js';

const persons = [
  new Person('Ana Smith', new Date('1998-12-15')),
  new Person('Bob Jones', new Date('1945-11-16')),
  new Person('Carlos Slim Helu', new Date('1976-09-24')),
];

persons.forEach(person => {
  console.log(person.toString());
});


const jimHanson = new Employee('Jim Hanson', new Date('1980-03-15'), 245990.00, new Date('2020-01-01'));
jimHanson.doJob('Software Engineer');