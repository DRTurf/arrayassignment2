// a) Create a student object
const student = {
    name: 'John Doe',
    age: 20,
};

// a) Use Object.preventExtensions to prevent further additions
Object.preventExtensions(student);

// b) Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student); // This will be false

// c) Create a new teacher object with a 'subject' property
const teacher = {
    subject: 'Math',
};

// d) Use Object.seal to seal the teacher object
Object.seal(teacher);

// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher); // This will be true

// f) Print the extensibleStatus and sealedStatus to the console
console.log(`Is the student object extensible? ${extensibleStatus}`); 
console.log(`Is the teacher object sealed? ${sealedStatus}`); 
