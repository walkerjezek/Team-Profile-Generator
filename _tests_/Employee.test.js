const Employee = require('../lib/Employee');

// Verify that the classes in the lib folder sucessfully create an object with the required info
describe('Employee class', () => {
    // create employee to test
    const testName = 'John';
    const testId = 2;
    const testEmail = 'john@test.com';
    const className = 'Employee';
    const testEmployee = new Employee(testName, testId, testEmail);

    it('has the expected name', () => {
        expect(testEmployee.getName()).toEqual(testName);
    });

    it('has the expected ID', () => {
        expect(testEmployee.getId()).toEqual(testId);
    });

    it('has the expected email', () => {
        expect(testEmployee.getEmail()).toEqual(testEmail);
    });
    
    it('has the Employee role', () => {
        expect(testEmployee.getRole()).toEqual(className);
    });
});