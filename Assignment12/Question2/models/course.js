class Course {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    save() {
        db.push(this);
        return this;
    }

    edit() {
        const index = db.findIndex(c => c.id == this.id);
        db.splice(index, 1, this);
        return this;
    }

    static getAll() {
        return db;
    }

    static deleteById(stuId) {
        const index = db.findIndex(cr => cr.id == crId);
        const deletedCr = db[index];
        db.splice(index, 1);
        return deletedCr;
    }
    static findById(crId) {
        const index = db.findIndex(cr => cr.id == crId);
        return db[index];
    }

}

let cr1 = new Course(425, "Software Engineering");
let cr2 = new Course(435, "Algorithms ");
let cr3 = new Course(472, "Web Application Programming");
let cr4 = new Course(516, "Cloud  Computing");


let db = [cr1, cr2, cr3, cr4];

module.exports = Course;