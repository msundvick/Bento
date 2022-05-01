// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
import { CONFIG } from "./config";

// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
// const name = CONFIG.name;

// Here you can change your greetings
const greet1 = `${CONFIG.greetingNight}\xa0`;
const greet2 = `${CONFIG.greetingMorning}\xa0`;
const greet3 = `${CONFIG.greetingAfternoon}\xa0`;
const greet4 = `${CONFIG.greetingEvening}\xa0`;

// Define the hours of the greetings
const greetings = document.getElementById("greetings");
if (hour >= 23 || hour < 5) {
  greetings.innerText = greet1;
} else if (hour >= 6 && hour < 12) {
  greetings.innerText = greet2;
} else if (hour >= 12 && hour < 17) {
  greetings.innerText = greet3;
} else {
  greetings.innerText = greet4;
}
