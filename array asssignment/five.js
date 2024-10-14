// Example student object
const student = {
    name:"Alice",
    age: 22,
    major:"Computer Science",
    GPA:3.8,
    isEnrolled:true
};

// a) Function to display student information
function displayStudentInfo(student) {
    for (const key in student) {
        if (student.hasOwnProperty(key)) { // Check if the property belongs to the student object
            console.log(`Property:${key}, Value:${student[key]}`);
        }
    }
}

// Example usage
displayStudentInfo(student);
