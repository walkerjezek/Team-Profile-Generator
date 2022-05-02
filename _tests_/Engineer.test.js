const Engineer = require('../lib/Engineer');

describe('Engineer Class', () => {
    const testName = 'Mike';
    const testId = 3;
    const testEmail = 'mike@test.com';
    const className = 'Engineer';
    const testGitHub = 'mikesmith123';
    const testEngineer = new Engineer(testName, testId, testEmail, testGitHub);

    it('has the expected name', () => {
        expect(testEngineer.getName()).toEqual(testName);
    });

    it('has the expected ID', () => {
        expect(testEngineer.getId()).toEqual(testId);
    });

    it('has the expected email', () => {
        expect(testEngineer.getEmail()).toEqual(testEmail);
    });

    it('has the Engineer role', () => {
        expect(testEngineer.getRole()).toEqual(className);
    });

    it('has the expected GitHub', () => {
        expect(testEngineer.getGitHub()).toEqual(testGitHub);
    });
});
