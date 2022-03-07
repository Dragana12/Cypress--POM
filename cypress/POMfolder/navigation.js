
class navigation  {
    get registerButton () {
        return cy.get ("href='/register'")
    }

get registerButton () {
    this.registerButton.click ();
}

}
export const navigation = new Navigation ();
