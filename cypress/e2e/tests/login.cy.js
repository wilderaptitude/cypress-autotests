describe('login', () => {
    it('should login successfully', () => {
        // open testpage
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('#content h1.heading').should('be.visible');
    })
})