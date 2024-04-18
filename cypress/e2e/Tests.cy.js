describe('template spec', () => {
  beforeEach('',()=>{
    cy.visit('/')
  })

  it('Create a new board successfully', () => {
  
    cy.get('[data-cy="create-board"]').click();
    cy.get('[data-cy="new-board-input"]').clear().type('New board{enter}');
    cy.get('.Nav_boards').click();
    // Get all board items
    cy.get('[data-cy=board-item]').last().within(() => {
      // Assert the text of the last board
      cy.get('.board_title').should('have.text', 'New board');
    });
  })

  it('Make sure to delete the last board created',()=>{
    cy.get('[data-cy=board-item]').last().click();
    cy.get('[data-cy="board-options"]').click(),
    cy.get('[data-cy="board-options"] > #myDropdown > .delete').click();
    cy.url().should('include','http://localhost:3000/');
  })
})