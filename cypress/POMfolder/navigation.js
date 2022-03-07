
class Navigation  {

    get checkBox (){
        return cy.get (':checkbox')
    }
    get registerButton () {
        return cy.get ("href='/register'")
    }

    get checkBox (){
        this.checkBox.click ();
    }

    get registerButton () {
    this.registerButton.click ();
    }

}
export const navigation = new Navigation ();
