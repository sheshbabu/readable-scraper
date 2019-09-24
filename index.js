const { JSDOM } = require("jsdom");
const axios = require("axios").default;
const Readability = require("./vendor/readability/Readability");

const URL =
  "http://www.sheshbabu.com/posts/speed-up-your-code-reviews-using-eslint-and-prettier/";

async function main() {
  const response = await axios.get(URL);
  const doc = new JSDOM(response.data);
  const reader = new Readability(doc.window.document);
  const { title, textContent } = reader.parse();
  console.log({ title, textContent });
}

main();
