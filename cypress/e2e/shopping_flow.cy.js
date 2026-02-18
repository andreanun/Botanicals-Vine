// shopping_flow.spec.js
describe("Botanicals & Vine Shopping Flow", () => {
  it("allows a user to add a plant to the cart with a custom pot color", () => {
    cy.visit("/plants"); // Go to plant_page

    // Click on the Blue Star Fern (as seen in your video)
    cy.contains("Blue Star Fern").click();

    // Select a pot color purchase option
    cy.get('select[name="pot-color"]').select("Terracotta");

    // Add to cart
    cy.contains("Add to Cart").click();

    // Verify the Cart Modal opens and shows the item
    cy.get("#cart-modal").should("be.visible");
    cy.get("#cart-modal").should("contain", "Blue Star Fern");
    cy.get("#cart-modal").should("contain", "Terracotta");
  });
});
