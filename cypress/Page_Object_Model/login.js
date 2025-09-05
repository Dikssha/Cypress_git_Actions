class login{

  url(){
    cy.visit("https://www.saucedemo.com/")
  }

  cancel(){
    cy.get('[class="error-button"]').click()
  }

  username(name){
    cy.get('#user-name').clear().type(name)
  }

  password(password){
    cy.get('#password').clear().type(password)
  }

  submit(){
    cy.get('#login-button').click()
  }
}

export default login