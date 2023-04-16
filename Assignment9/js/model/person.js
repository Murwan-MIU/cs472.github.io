"use strict"

class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }

  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  toString() {
    const formattedDate = this.dateOfBirth.toISOString().substring(0, 10);
    return `{ Name: ${this.name}, DateOfBirth: ${formattedDate} }`;
  }
}
export default Person