const Intern = require('../lib/Intern');

describe('Intern Class', () => {
    const testName = 'Mike';
    const testId = 3;
    const testEmail = 'mike@test.com';
    const className = 'Intern';
    const testSchool = 'CU Boudler';
    const testIntern = new Intern(testName, testId, testEmail, testSchool);

    it('has the expected name', () => {
        expect(testIntern.getName()).toEqual(testName);
    });

    it('has the expected ID', () => {
        expect(testIntern.getId()).toEqual(testId);
    });

    it('has the expected email', () => {
        expect(testIntern.getEmail()).toEqual(testEmail);
    });

    it('has the Intern role', () => {
        expect(testIntern.getRole()).toEqual(className);
    });

    it('has the expected school', () => {
        expect(testIntern.getSchool()).toEqual(testSchool);
    });
});