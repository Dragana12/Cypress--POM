/// <reference types="Cypress" />

import { RegisterPg } from '../POMfolder/registerPom.js'
import { navigation, Navigation } from '../POMfolder/navigation.js'

describe("registration test", () => {

    beforeEach('visit register page', ()=> {
      cy.visit('/register');
      navigation.clickRegisterButton ();
    })
  
    it("register without first name", () => {
      cy.get(Register.lastName).type("prezime");
      cy.get(Register.emailField).type("test+@mail.com");
      cy.get(Register.passwordField).type("Test12345!");
      cy.get(Register.passwordConfirmation).type("Test12345!");
      cy.get(Register.checkbox).check();
      cy.get(Register.submitBtn).click();
    });
  
    it("register without last name", () => {
      cy.get(Register.firstName).type("ime");
      cy.get(Register.emailField).type("test+@mail.com");
      cy.get(Register.passwordField).type("Test12345!");
      cy.get(Register.passwordConfirmation).type("Test12345!");
      cy.get(Register.checkbox).check();
      cy.get(Register.submitBtn).click();
    });
  
    it("register with invalid email", () => {
      cy.get("#first-name").type("ime");
      cy.get(Register.lastName).type("prezime");
      cy.get(Register.emailField).type("test+mail.com");
      cy.get(Register.passwordField).type("Test12345!");
      cy.get(Register.passwordConfirmation).type("Test12345!");
      cy.get(Register.checkbox).check();
      cy.get(Register.submitBtn).click();
    });
  
    it("register with invalid password confirmation", () => {
      cy.get("#first-name").type("ime");
      cy.get(Register.lastName).type("prezime");
      cy.get(Register.emailField).type("test+@mail.com");
      cy.get(Register.passwordField).type("Test12345!");
      cy.get(Register.passwordConfirmation).type("Test12345");
      cy.get(Register.checkbox).check();
      cy.get(Register.submitBtn).click();
    });
  
    it("register withhout checking terms and conditions", () => {
      cy.get("#first-name").type("ime");
      cy.get(Register.lastName).type("prezime");
      cy.get(Register.emailField).type("test+@mail.com");
      cy.get(Register.passwordField).type("Test12345!");
      cy.get(Register.passwordConfirmation).type("Test12345!");
      cy.get(Register.submitBtn).click();
    });
  
    it("register with valid data", () => {
      cy.get("#first-name").type("ime");
      cy.get(Register.lastName).type("prezime");
      cy.get(Register.emailField).type("test+@mail.com");
      cy.get(Register.passwordField).type("Test12345!");
      cy.get(Register.passwordConfirmation).type("Test12345!");
      cy.get(Register.checkbox).check();
      cy.get(Register.submitBtn).click();
    });
  });
