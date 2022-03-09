class RegisterPg {

    get firstName() {
        return cy.get('#first-name');
    }
    get lastName() {
        return cy.get('#last-name');
    }
    get email() {
        return cy.get('#email');   
    }
    get password() {
        return cy.get('#password');
    }
    get passwordConfirmation() {
        return cy.get('#password-confirmation');
    }

    get checkBox() {
        return cy.get(':checkbox');
    }
    get submitBtn() {
        return cy.get('button');
    }

    register (firstName, lastName, email, password) {
        this.firstName.type (firstName);
        this.lastName.type (lastName);
        this.email.type(email);
        this.password.type(password);
        this.passwordConfirmation.type(password);
        this.checkBox.check();
        this.submitBtn.click();  
      }
}

export const registerPg = new RegisterPg ();
    
