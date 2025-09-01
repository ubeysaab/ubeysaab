const fs = require("fs");

// Load quotes
const quotes = require("./quotes.json");

// Pick a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Read README
let readme = fs.readFileSync("README.md", "utf-8");

// Replace old quote with new one
const newContent = readme.replace(
  /(<!-- QUOTE_START -->)([\s\S]*?)(<!-- QUOTE_END -->)/,
  `<!-- QUOTE_START -->\n ${randomQuote}\n<!-- QUOTE_END -->`
);

// Save updated README
fs.writeFileSync("README.md", newContent);

console.log("✅ README updated with new quote:", randomQuote);
