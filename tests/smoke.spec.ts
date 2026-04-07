import { test } from "../utils/fixtures";
import { APILogger } from "../utils/logger";

test("first", async ({ api, config }) => {
  const response = await api
    .path("/customers/authentication")
    .params({})
    .headers({
      ContentType: "application/json",
      Accept: "application/vnd.enp.api+json;version=v1",
    })
    .body({
      grant_type: "client_credentials",
      client_id: config.client_id,
      client_secret: config.client_secret,
      old_token: null,
    })
    .postRequest(200);
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
