/// <reference types="Cypress" />

import { registerPg } from '../POMfolder/registerPom.js'
import { navigation } from '../POMfolder/navigation.js'

describe("registration test", () => {

    beforeEach('visit register page', ()=> {
      cy.visit('/register');
    })
  
    it ("register without first name", () => {
      registerPg.lastName('Pjescic');
      registerPg.email('mila125@gmail.com');
      registerPg.password('test1234');
      registerPg.passwordConfirmation('test1234');
      navigation.checkBox.click();
      navigation.button.click();

    });

  });
