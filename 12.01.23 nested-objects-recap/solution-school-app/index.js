const school = {
    name:'My amazing school',
    address: {
        street:'Schoolstreet',
        number:15,
        postalCode:10115,
        city:'Berlin',
    },
    classgroups:[]
}
//create a new classgroup function.
const createClassGroup = (classgroupParameter) => {
    //mapping limits it to just array id's e.g. [1,2,3]
    //getting a new id
    let newId = Math.max(...school.classgroups.map(c => c.id.slice(1)),0) + 1

    console.log("the parameter is an object", classgroupParameter.name);
    school.classgroups.push({id:`C${newId}`, name:classgroupParameter.name, students:[]});
}

const createStudent = (classGroupId, student) => {
    //find the classgroup object in classgroups that's equal to the classGroupId
    let classgroup = school.classgroups.find((c) => c.id == classGroupId);
    //generatin a new id based on the maximum we can find
    let newId = Math.max(...classgroup.students.map(c => c.id.slice(1)),0) + 1
    //creating a new student object to add to the our students array
    let studentToCreate = {
        id:`S${newId}`,
        name:student.name,
        email:student.email,
        city:student.city
    }
    //calling the push method to add the student to the array
    classgroup.students.push(studentToCreate);
}

//removing the classgroup from our school
const removeClassGroup = (classGroupId) => {
    //filtering out everything that's not the classGroupId.
    school.classgroups = school.classgroups.filter((c) => c.id != classGroupId);
}
//removing the student from the classgroup.
const removeStudent = (classGroupId, studentId) => {
    //find the classgroup object in classgroups that's equal to the classGroupId
    let classgroup = school.classgroups.find((c) => c.id == classGroupId);
    console.log("this is the classgroup we found", classgroup);
    //filter out the student with this student id and reassign the array to classgroup.students
    classgroup.students = classgroup.students.filter((s) => s.id != studentId);
}

//updating a student (editing)
const editStudent = (classGroupId, studentId, studentData) => {
    //find the classgroup object in classgroups that's equal to the classGroupId
    let classgroup = school.classgroups.find((c) => c.id == classGroupId);
    //find the student within this classgroup with this id. 
    let studentToEdit = classgroup.students.find((s) => s.id == studentId);
    console.log("the student data is", studentData);
    //updating student data
    //check if there is a name there.
    if(studentData.name){
        studentToEdit.name = studentData.name;
    }
    //check if there's an email address present
    if(studentData.email){
        studentToEdit.email = studentData.email;
    }
    //check if there's a city. 
    if(studentData.city){
        studentToEdit.city = studentData.city;
    }
}

//creating three different classgroups for our school. 
createClassGroup({name:'E08'});
createClassGroup({name:'E09'});
createClassGroup({name:'E10'});

//adding two new students to classgroup C2
//both of these students will be part of classgroup with id C2
createStudent('C2',{name:'John Test', email:'john.test@test.com', city:'Berlin'});
createStudent('C2',{name:'Mike Test', email:'mike.test@test.com', city:'Berlin'});
//adding a new student to classgroup C3
createStudent('C3',{name:'Elisa Test', email:'elisa.test@test.com', city:'Berlin'});

console.log(school.classgroups);
removeClassGroup('C1');
console.log(school);
//a list of students of classgroup C2
console.log(school.classgroups[0]);
removeStudent('C2','S2');
console.log(school.classgroups[0]);
//editing student in class C2 change city to Leipzig. 
editStudent('C2','S1',{city:'Leipzig', email:'john.test2@test.com'});
console.log(school.classgroups[0]);
