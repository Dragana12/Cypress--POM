class CreateGalleryPage {

    get navLinkCreateGallBtn () {
        return cy.get ('/create');
    };
    
    get createGalleryHeading() {
        return cy.get('h1');
    };

    get titleInput() {
        return cy.get('#title');
    };

    get descriptionInput() {
        return cy.get('#description');
    };

    get imagesInput() {
        return cy.get('image url');
    };
    get addImageBtn() {
        return cy.get(':button');
    };
    get submitBtn() {
        return cy.get(':button');
    }
    get cancelBtn() {
        return cy.get(':button');
    };

    create (titleInput, descriptionInput, imagesInput ){
        this.titleInput.type(titleInput);
        this.descriptionInput.type(descriptionInput);
        this.imagesInput.type(imagesInput);
        this.submitBtn.click();
};

}

export const createGalleryPage = new CreateGalleryPage();
