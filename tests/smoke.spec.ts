import { test, expect } from "@playwright/test";
import { RequestHandler } from "../utils/request-handler";

test("first", async ({}) => {
  const api = new RequestHandler();

  api
    .url("https://api_enp0027a01.enp.dev")
    .path("/api/customers/authentication")
    .params({})
    .headers({})
    .body({
      grant_type: "client_credentials",
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      old_token: null,
    });
});
