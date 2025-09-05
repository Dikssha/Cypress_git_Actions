///<reference types="cypress"/>
import login from "../Page_Object_Model/Login"

describe("login page",function(){

    const logg=new login()
 
    beforeEach(function(){
        logg.url()
        cy.fixture('sauce').as('userr')
    })

    it("using fixture data",function(){
        logg.username(this.userr.valid.name)
        logg.password(this.userr.valid.password)
        logg.submit()
    })

    it("using fixture invalid data",function(){
        logg.username(this.userr.invalid.name)
        logg.password(this.userr.invalid.password)
        logg.submit()
        cy.get('[class="error-message-container error"]').should('be.visible')
    })

    // it('valid login', function(){

    //     logg.url()
    //     logg.username('standard_user')
    //     logg.password('secret_sauce')
    //     logg.submit()
    // })
})