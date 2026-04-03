import { test } from "../utils/fixtures";
import { APILoger } from "../utils/logger";

test("first", async ({ api }) => {
  const response = await api
    .path("/api/customers/authentication")
    .params({})
    .getRequest();
});

test("logger test", () => {
  const logger = new APILoger();
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
