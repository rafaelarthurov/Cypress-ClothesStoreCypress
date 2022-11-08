
Cypress.Commands.add('login', (value) => {
    
    cy.fixture('login.').then((mail, password)=>{
        cy.get('login.SignInMain').click()
        cy.get('login.EmailField').type(mail)
        cy.get('login.PasswordField').type(password)
        cy.get('login.SignInForm').click()
    })

})