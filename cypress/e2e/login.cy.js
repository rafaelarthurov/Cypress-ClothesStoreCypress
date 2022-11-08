
describe ('Login', () => {

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Incorrect mail in login', ()=>{

        cy.login('NotAnEmail', 'BadPassword')

        cy.fixture('login.').then((parameter)=>{
            cy.get('login.WrongSignInAlert').should('contain', 'Invalid email address')
        })

        /*cy.get('.login').click()
        cy.get('#email').type('NotAnEmail')
        cy.get('#passwd').type('BadPassword')
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').should('contain', 'Invalid email address')*/
    })

})