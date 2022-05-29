
describe('My First Test', () => {
  it('Visits the initial project page', () => {

    //Home
    cy.visit('/')

    //New museun
    cy.contains("New museum").click();

    //Data form
    let body = cy.get("body");
    body.find("#name").first().type("The National Gallery", { force: true });
    cy.wait(100);
    body = cy.get("body");
    body.find("#description").first().type("Founded in 1824, it houses a collection of over 2,300 paintings dating from the mid-13th century to 1900", { force: true });
    cy.wait(100);
    body = cy.get("body");
    body.find("#address").first().type("Trafalgar Square, London WC2N 5DN", { force: true });
    cy.wait(100);
    body = cy.get("body");
    body.find("#city").first().type("London", { force: true });
    cy.wait(100);
    body = cy.get("body");
    body.find("#image").first().type("https://cdn.archpaper.com/wp-content/uploads/2021/05/p-101-Sainsbury-Wing-of-The-National-Gallery-London-1280x1015.jpg", { force: true });
    cy.wait(200);

    //Create museun
    cy.get('[type="submit"]').click();
    cy.wait(100);

    cy.contains('The National Gallery')
    cy.wait(100);

  })
 })
