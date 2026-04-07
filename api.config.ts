import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

const processENV = process.env.TEST_ENV;
const env = processENV || "pre";
console.log(`Środowisko Testowe: ${env}`);

const config = {
  apiUrl: "",
  client_id: "",
  client_secret: "",
};

if (env === "pre") {
  ((config.apiUrl = "https://pre-brico.adafir.eu/api"),
    (config.client_id = process.env.CLIENT_ID as string),
    (config.client_secret = process.env.CLIENT_SECRET as string));
}

export { config };
