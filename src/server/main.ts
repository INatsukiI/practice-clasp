// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { GreetResponse } from "../common/type";

// @ts-ignore
function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").addMetaTag(
    "viewport",
    "width=device-width, initial-scale=1"
  );
}

const getGreeting = (): GreetResponse => {
  return {
    message: "こんにちは",
  };
};

export { getGreeting };
