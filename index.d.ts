import { fullpageApi } from "@fullpage/react-fullpage";

export {};

declare global {
  interface Window {
    fullpage_api: fullpageApi;
  }
}
