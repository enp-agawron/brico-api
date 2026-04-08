import { RequestHandler } from "../utils/request-handler";
import { config } from "../api.config";
import { APILogger } from "../utils/logger";
import { request } from "@playwright/test";

export async function createToken(clientId: string, clientSecret: string) {
  const context = await request.newContext();
  const logger = new APILogger();
  const api = new RequestHandler(context, config.apiUrl, logger);

  try {
    const tokenResponse = await api
      .path("/customers/authentication")
      .body({
        grant_type: "client_credentials",
        client_id: clientId,
        client_secret: clientSecret,
        old_token: null,
      })
      .postRequest(200);
    return tokenResponse.access_token;
  } catch (error: any) {
    Error.captureStackTrace(error, createToken);
    throw error;
  } finally {
    await context.dispose();
  }
}
