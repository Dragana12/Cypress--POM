/// <reference types="Cypress" />

import { allGalleriesPage } from '../POMfolder/allGalleries.js'

describe ("All Galleries test", () => {

    beforeEach('visit allGalleries page', () => {
    cy.visit ('/');

});
 it ("Get heading text", () => {
     allGalleriesPage.allGalleriesHeading.should ('contain.text', 'All Galleries');
});

 it ("Get heading text class", () =>{
    allGalleriesPage.allGalleriesHeading.should ('have.class', 'title-style');
});

it ("Get heading text color", () => {
    allGalleriesPage.allGalleriesHeading.should('have.css','color');
});

it("Search button", () => {
    allGalleriesPage.searchInput
    .should ('be.visible')
    .and ('not.have.a.property', 'Search');
});

it ("Get filter button", () => {
        allGalleriesPage.filterBtn.should('have.text','Filter');

});
it ("Get filter button", () => {
    allGalleriesPage.filterBtn.should('have.length', 1);
});

it( 'Load more btn', () =>{
    allGalleriesPage.loadMoreBtn.should ('have.class', 'btn btn-custom');
});

it.only( 'Load more btn', () =>{
    allGalleriesPage.loadMoreBtn.should ('match', 'button');

});
});
