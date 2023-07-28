describe('Testing Orange HRM', () => {
  it('Empty Input Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    cy.get('[name="username"]').type("Admin")
    cy.get('[type="submit"]').click()
    cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text', 'Required')
  })

  it('Failed login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    cy.get('[name="username"]').type("cendana")
    cy.get('[type="password"]').type("demangan")
    cy.get('[type="submit"]').click()
    cy.get('[role="alert"]').should('be.visible')
  })
  it('Pass login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php')
    cy.get('[name="username"]').type("Admin")
    cy.get('[type="password"]').type("admin123")
    cy.get('[type="submit"]').click()
    cy.get('.oxd-topbar-header-breadcrumb').should('have.text', 'Dashboard')
    // cy.get('[.oxd-alert-content oxd-alert-content--error"]').should('be.visible')
  })

})