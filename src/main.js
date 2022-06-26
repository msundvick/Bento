import {} from "./cards";
import {} from "./greeting";
import {} from "./lists";
import {} from "./theme";
import {} from "./time";

import { createIcons, icons } from "lucide";
createIcons({ icons });

import { registerSW } from "virtual:pwa-register";
if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}
