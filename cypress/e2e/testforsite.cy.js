describe('empty spec', () => {
  it('passes', () => {
    cy.viewport(1200, 900) 
    cy.visit('https://nikolaevalexandr.github.io')
    cy.get('h2.title2')
  
    
  })
})