import { expect } from "../utils/custom-expect";
import { test } from "../utils/fixtures";
import { APILogger } from "../utils/logger";

test("first", async ({ api }) => {
  const getCategoriesTree = await api
    .path("/categories/tree")
    .params({ filter: '{ "main_category": 1 }' })
    .headers({ "Content-Website": "4" })
    .getRequest(200);

  const categoriesID = getCategoriesTree[0].children[0].id;
  expect(categoriesID).shouldEqual(5064);
});

test("logger test", () => {
  const logger = new APILogger();
  logger.logRequest(
    "POST",
    "https://pre-brico.adafir.eu",
    { auth: "tokenik" },
    { foo: "bar" },
  );
  logger.logResponse(200, { foo: "bar" });
  const logs = logger.getRecentLogs();
  console.log(logs);
});
