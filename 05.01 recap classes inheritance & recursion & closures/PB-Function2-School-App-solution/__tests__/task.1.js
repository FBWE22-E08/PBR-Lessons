const rewire = require("rewire");

describe("Task1: Creating a class", () => {
    test("`createClass` function takes class object as argument and adds it to `school`", () => {
        const solutions = rewire("../index.js");
        const createClass = solutions.__get__("createClass");
        const newClass = createClass({ name: "dci-test-class" });
        createClass(newClass);
        const school = solutions.__get__("school");
        //console.log('\u001b[1;41m',JSON.stringify(school));
        expect(typeof createClass).toBe("function")
        expect(JSON.stringify(school)).toContain("dci-test-class");
    });
});
describe("Task2: Adding a student", () => {
    test("`createStudent` function takes student object as argument and adds it to `school`", () => {
        const solutions = rewire("../index.js");
        const createStudent = solutions.__get__("createStudent");
        // get school array
        const school = solutions.__get__("school");
        const studentsData = { classID: 1, name: "dci-tester", email: "tester@dci.org", city: "Berlin" };
        createStudent(studentsData);
        //console.log('\u001b[1;31m',JSON.stringify(school));
        expect(typeof createStudent).toBe("function")
        expect(JSON.stringify(school)).toContain("dci-tester")
    });
});
describe("Task3: Removing class", () => {
    test('`removeClass` function should remove a class based on class ID passed as a argument', () => {
        const solutions = rewire("../index.js");
        const removeClass = solutions.__get__("removeClass");
        const school = solutions.__get__("school");
        const classFirstName = school[0].name;
        //console.log('\u001b[1;31m',JSON.stringify(classFirstId));
        removeClass(1);
        const schoolAfterRemove = solutions.__get__("school");
        //console.log('\u001b[1;31m',JSON.stringify(school));
        expect(typeof removeClass).toBe("function")
        expect(JSON.stringify(schoolAfterRemove)).not.toContain(classFirstName)
    });
});
describe("Task4: Removing student", () => {
    test('`removeStudent` function should remove a student based on passed object containing class ID and student ID', () => {
        const solutions = rewire("../index.js");
        const removeStudent = solutions.__get__("removeStudent");
        removeStudent({ classID: 1, studentID: 1 });
        const schoolAfterRemove = solutions.__get__("school");
        expect(typeof removeStudent).toBe("function")
        expect(schoolAfterRemove[0].students[0]).not.toBeDefined()
    });
});
describe("Task5: Editing student", () => {
    test('`editStudent` function should edit a student based on passed object containing class ID, student ID and new values', () => {
        const solutions = rewire("../index.js");
        const editStudent = solutions.__get__("editStudent");
        editStudent({ classID: 1, studentID: 1, name: "dci-tester-edited", email: "dci@test.org", city: "DCI-City" });
        const schoolAfterEdit = solutions.__get__("school");
        expect(typeof editStudent).toBe("function")
        expect(schoolAfterEdit[0].students[0].name).toBe("dci-tester-edited")
        expect(schoolAfterEdit[0].students[0].email).toBe("dci@test.org")
        expect(schoolAfterEdit[0].students[0].city).toBe("DCI-City")
    });
});
describe('Rendering', () => {
    test('`RenderSchoolTemplate` function should return all school data in string', () => {
        const solutions = rewire("../index.js");
        const renderSchoolTemplate = solutions.__get__("RenderSchoolTemplate");
        const school = solutions.__get__("school");
        const schoolTemplate = renderSchoolTemplate(school);
        expect(typeof renderSchoolTemplate).toBe("function")
        expect(schoolTemplate).toContain(school[0].students[0].email)
        expect(schoolTemplate).toContain(school[0].students[0].name)
        expect(schoolTemplate).toContain(school[0].students[0].city)
    });
    test('Returned string is formatted as specified', () => {
        const solutions = rewire("../index.js");
        const renderSchoolTemplate = solutions.__get__("RenderSchoolTemplate");
        const school = solutions.__get__("school");
        const schoolTemplate = renderSchoolTemplate(school);
        expect(typeof renderSchoolTemplate).toBe("function");
        expect(schoolTemplate).toContain('--------');
        expect(schoolTemplate).toContain('************');
        expect(schoolTemplate.toString().toLowerCase()).toContain('class id');
        expect(schoolTemplate.toString().toLowerCase()).toContain('the class is empty');
        expect(schoolTemplate.toString().toLowerCase()).toContain(school.length.toString());
        expect(schoolTemplate.toString().toLowerCase().replace(/(\r\n|\n|\r|\ )/gm, "")).toContain('totalclasses' + school.length.toString());
    });

})