import { expect } from "../../utils/custom-expect";
import { test } from "../../utils/fixtures";

test.describe.serial("Create order", () => {
  let categoryId: string;
  let offerId: string;

  test("Krok 1: Pobieram główną kategorie", async ({ api }) => {
    const getCategoriesTree = await api
      .path("/categories/tree")
      .params({ filter: '{ "main_category": 1 }' })
      .headers({ "Content-Website": "4" })
      .getRequest(200);

    const firstCategoryId = getCategoriesTree[0].children[0].id;
    const categoryName = getCategoriesTree[0].children[0].name;
    categoryId = firstCategoryId;
    expect(firstCategoryId).shouldEqual(5064);
    expect(categoryName).shouldEqual("Okazje online");
  });

  test("Krok 2: Pobieram ofertę", async ({ api }) => {
    const getOffer = await api
      .path(`/categories/${categoryId}/product-offers`)
      .headers({ "Content-Website": "4" })
      .getRequest(200);

    const firstOffer = getOffer.offers[0].id;
    offerId = firstOffer;
    console.log(firstOffer);
  });
  test("Krok 3: ", async ({ api }) => {});
  test("Krok 4: ", async ({ api }) => {});
  test("Krok 5: ", async ({ api }) => {});
  test("Krok 6: ", async ({ api }) => {});
});
