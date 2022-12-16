describe("One round of a quiz game", () => {
  it(" should show a page hwo starts the quiz", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("contain", "Start quiz");
    cy.get("[data-testid=playername-input]").type("Johnny");
    cy.get("[data-testid=select-difficulty]").select("medium");
    cy.get("[data-testid=select-region]").select("GB");
    cy.get("[data-testid=start-quiz-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 1 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 2 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 3 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 4 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 5 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 6 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 7 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 8 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "Pick a category");
    cy.get("[data-testid=category-button]:first").click();
    cy.get("h2").should("contain", "Question: 9 / 9");
    cy.get("[data-testid=check-answer-button]:first").click();
    cy.get("[data-testid=next-question-button]").click();

    cy.get("h1").should("contain", "End game");
    cy.get("p").contains(/Your score is: \d+ points/i);
  });
});
