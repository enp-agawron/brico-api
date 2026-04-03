import { test } from "../utils/fixtures";

test("first", async ({ api }) => {
 
  const response = await api
    .path("/api/customers/authentication")
    .params({})
    .getRequest()
});
