
describe('New sponsor Test', () => {
  it('Visits the initial project page', () => {

    //Home
    cy.visit('/')
    cy.wait(100);

    //New sponsor
    cy.contains("Sponsors").click();
    cy.wait(100);

    cy.contains("New sponsor").click();
    cy.wait(100);

    //Data form
    let body = cy.get("body");
    body.find("#name").first().type("Credit Suisse", { force: true });
    cy.wait(100);
    body = cy.get("body");
    body.find("#description").first().type("Credit Suisse has a long and distinguished tradition of supporting the arts, working with leading cultural institutions to encourage innovative projects and wider access to theatre, music, and the visual arts.", { force: true });
    cy.wait(100);
    body = cy.get("body");
    body.find("#website").first().type("https://www.credit-suisse.com", { force: true });
    cy.wait(100);

    //Create museun
    cy.get('[type="submit"]').click();
    cy.wait(100);

    cy.contains('Credit Suisse')
    cy.wait(100);

  })
 })
