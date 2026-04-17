import { expect } from "../../utils/custom-expect";
import { test } from "../../utils/fixtures";
import { APILogger } from "../../utils/logger";

test.describe.serial("Create order", () => {
  let main_category: string;
  let offer_id: string;

  test("Krok 1: Pobieram główną kategorie", async ({ api }) => {
    const getCategoriesTree = await api
      .path("/categories/tree")
      .params({ filter: '{ "main_category": 1 }' })
      .headers({ "Content-Website": "4" })
      .getRequest(200);

    const categoriesID = getCategoriesTree[0].children[0].id;
    main_category = categoriesID;
    expect(categoriesID).shouldEqual(5064);
  });

  test("Krok 2: Pobieram ofertę", async ({ api }) => {});
  test("Krok 3: ", async ({ api }) => {});
  test("Krok 4: ", async ({ api }) => {});
  test("Krok 5: ", async ({ api }) => {});
  test("Krok 6: ", async ({ api }) => {});
});
