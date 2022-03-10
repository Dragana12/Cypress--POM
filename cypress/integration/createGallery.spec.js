/// <reference types="Cypress" />

import { loginPage } from "../POMfolder/login.js";
import { createGalleryPage } from '../POMfolder/createGallery.js';

describe ("Create Galleries test", () => {

    beforeEach('visit loginGallery page', () => {
    cy.visit('/login');
});


    it ("login with valid credentials", () => {
        loginPage.login('mila1@dp.com','test1234');
        cy.get('.nav-link').should('have.length', 4);
});


    it ("Visit create page", () => {
        cy.wait(1000);
        cy.visit('/create');
        createGalleryPage.titleInput.should ('have.a.property', 'text');
});
    it ("DescField", () => {
      createGalleryPage.descriptionInput.should ('not.have.lengthOf.above', 23)
        .and('have.id', 'description');
       
});

    it.only ("ImageField", () => {
    createGalleryPage.imagesInput.should ('contain', 'url');
      
     
});
});
