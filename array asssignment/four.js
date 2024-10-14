// Initial array of students
const students = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 20, grade: 'A' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 22, grade: 'B' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 19, grade: 'A' },
];

// a) Add a Student
function addStudent(id, firstName, lastName, age, grade) {
    const newStudent = { id, firstName, lastName, age, grade };
    students.push(newStudent);
    console.log(`Student added: ${firstName} ${lastName}`);
}

// b) Update Student Information
function updateStudent(id, updatedInfo) {
    const student = students.find(s => s.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
        console.log(`Student updated: ${student.firstName} ${student.lastName}`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// c) Delete a Student
function deleteStudent(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        const removedStudent = students.splice(index, 1);
        console.log(`Student deleted: ${removedStudent[0].firstName} ${removedStudent[0].lastName}`);
    } else {
        console.log(`Student with ID ${id} not found.`);
    }
}

// d) List All Students
function listAllStudents() {
    console.log('List of Students:');
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e) Find Students by Grade
function findStudentsByGrade(grade) {
    const filteredStudents = students.filter(s => s.grade === grade);
    console.log(`Students with grade ${grade}:`);
    filteredStudents.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
    });
}

// f) Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average Age: ${averageAge.toFixed(2)}`);
}

// Example Usage
addStudent(4, 'Alice', 'Johnson', 21, 'B');
updateStudent(2, { age: 23, grade: 'A' });
deleteStudent(3);
listAllStudents();
findStudentsByGrade('A');
calculateAverageAge();
