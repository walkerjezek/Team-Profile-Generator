const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    const testName = 'Mike';
    const testId = 3;
    const testEmail = 'mike@test.com';
    const className = 'Manager';
    const testOffice = 12;
    const testManager = new Manager(testName, testId, testEmail, testOffice);

    it('has the expected name', () => {
        expect(testManager.getName()).toEqual(testName);
    });

    it('has the expected ID', () => {
        expect(testManager.getId()).toEqual(testId);
    });

    it('has the expected email', () => {
        expect(testManager.getEmail()).toEqual(testEmail);
    });

    it('has the Manager role', () => {
        expect(testManager.getRole()).toEqual(className);
    });

    it('has the expected office', () => {
        expect(testManager.officeNumber).toEqual(testOffice);
    });
});