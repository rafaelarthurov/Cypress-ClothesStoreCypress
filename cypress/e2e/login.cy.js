
describe ('Login', () => {

    beforeEach(()=>{
        cy.visit('/')
    })

    it('Incorrect mail in login', ()=>{

        cy.login('NotAnEmail', 'BadPassword')

        cy.fixture('login').then((parameter)=>{
            cy.get('login.WrongSignInAlert').should('contain', 'Invalid email address')
        })
    })

})