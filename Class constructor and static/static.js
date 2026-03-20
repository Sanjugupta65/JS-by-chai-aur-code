class Student {
    constructor(name, rollno) {
        this.name = name;
        this.rollno = rollno;
    }

    hello() {
        return (`Hi, I am ${this.name}`);  // regular method
    }

    static college() {
        return (`College: CLGH`);           // static method
    }
}

const s1 = new Student("Sanju", 101);

console.log(s1.hello());          // ✅ works  → "Hi, I am Sanju"
console.log(Student.college());   // ✅ works  → "College: CLGH"

s1.college();        // ❌ ERROR  → s1.college is not a function


/* ## Why the Error?
```
static method  →  belongs to CLASS
normal method  →  belongs to OBJECT (instance)


// Think of it like this:
Student.college()   // ✅ class owns it
s1.college()        // ❌ object does NOT own it
*/