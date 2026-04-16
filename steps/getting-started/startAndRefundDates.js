import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

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
  console.log(`Product prices: ${productInfo.prices[1].baseAmount}`);
});

Then("the displayed refund date should be accurate", async function () {
  await expect(startApplicationPage.refundEndDate).toHaveText(
    productInfo.refundDate,
  );
});
