import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});

Then("Program start date should be displayed", async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("Program refund date should be displayed", async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("the displayed program start date should be accurate", async function () {
  await expect(startApplicationPage.programStartDate).toHaveText(
    productInfo.startDate,
  );
});

Then("the displayed refund date should be accurate", async function () {
  await expect(startApplicationPage.refundEndDate).toHaveText(
    productInfo.refundDate,
  );
});