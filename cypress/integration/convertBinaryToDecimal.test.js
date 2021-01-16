/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

describe("Login", () => {
  before(() => {
    cy.visit("/");
  });

  context("Layout", () => {
    it("should warn when binary field has invalid value", () => {
      cy.get("#input-binary-number").clear().type("2");
      cy.get("#input-binary-number").should(
        "has.css",
        "color",
        "rgb(248, 113, 113)"
      );
    });
  });
});
