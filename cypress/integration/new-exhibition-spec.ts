
describe('New Exhibition Test', () => {
  it('Visits the initial project page', () => {

    //Home
    cy.visit('/')

    //Open museum
    cy.get('[alt="Bendigo Art Gallery"]').click();
    cy.wait(200);

    //List exhibitions
    cy.contains("Open exhibitions").click();
    cy.wait(100);

    //New exhibition
    cy.contains("New exhibit").click();
    cy.wait(100);

    //Data form
    let body = cy.get("body");
    body.find("#name").first().type("Raphael", { force: true });
    cy.wait(100);
    body = cy.get("body");
    body.find("#description").first().type("One of the first-ever exhibitions to explore Raphael's complete career", { force: true });
    cy.wait(100);

    //Sponsor
    cy.get('[formcontrolname="sponsor"]').select(0);
    cy.wait(100);

     //Create exhibicion
     cy.get('[type="submit"]').click();
     cy.wait(100);

    //Then
     cy.contains('Raphael')
     cy.wait(100);



  })
 })
