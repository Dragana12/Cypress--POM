/// <reference types="Cypress" />

import { registerPg } from '../POMfolder/register.js'
import { navigation } from '../POMfolder/navigation.js'

describe("registration test", () => {

    beforeEach('visit register page', ()=> {
      cy.visit('/register');
    });
  
    it("register without first name", () => {
      registerPg.register(' ', 'lastName','email','password','checkbox');
     registerPg.firstName.should('be.empty')
    });


    it("register without last name", () => {
      registerPg.register('firstName ', '  ','email','password','checkbox');
     registerPg.lastName.should('be.empty')
    });

    
    it.only("register with invalid email", () => {
    registerPg.register('firstName ','lastName','email','password','checkbox');
    registerPg.email.should('have.text', "");
    
  });

    });

