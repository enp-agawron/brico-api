import { expect as baseExpect } from "@playwright/test";
import { APILogger } from "./logger";

let apiLogger: APILogger;

export const setCustomExpectLogger = (logger: APILogger) => {
  apiLogger = logger;
};

export const expect = baseExpect.extend({
  shouldEqual(recived: any, expected: any) {
    let pass: boolean;
    let logs: string = "";

    try {
      baseExpect(recived).toEqual(expect);
      pass = true;
      if (this.isNot) {
        logs = apiLogger.getRecentLogs();
      }
    } catch (error) {
      pass = false;
      logs = apiLogger.getRecentLogs();
    }

    const hint = this.isNot ? "not" : "";
    const message =
      this.utils.matcherHint("shouldEqual", undefined, undefined, {
        isNot: this.isNot,
      }) +
      "\n\n" +
      `Expected: ${hint} ${this.utils.printExpected(expected)}\n` +
      `Recived: ${this.utils.printReceived(recived)}\n\n` +
      `Recent API Activity: \n${logs}`;

    return {
      message: () => message,
      pass,
    };
  },
});
