import puppetier from "puppeteer";
import * as fs from "fs";
import { text } from "express";
(async () => {
  const browser = await puppetier.launch({ headless: false });
  const page = await browser.newPage();

  console.log(`%c${`page`},
  "font-weight: bold; color: red;")
  console.log(`%c${window.location}`, "font-weight: bold; color: red;");
  await page.goto("https://www.foxnews.com/politics", {
    waitUntil: "load",
  });

  const fetchHeaders = async (res, err) => {
    return await page
      .$$(
        "#wrapper > div > div.page-content > div > main > section:nth-child(6) > div > article:nth-child(1) > div.info > header > h4 > a"
      )
      .then(() => console.log(res));
  };

  fetchHeaders();

  // Need to connect to firebase store and setup post methods for a noSQL server -> Axios
  //   await page.$eval(
  //     "#wrapper > div > div.page-content > div > main > section:nth-child(6) > div > article:nth-child(1) > div.info > header > h4 > a",
  //     async (element) => {
  //       console.debug(element.textContent);
  //       await fs.writeFile(`/fox/fox-headline-${element.id}.txt`, { element }),
  //         () => {
  //           if (err) return console.log(err);
  //           console.log("Hello World > helloworld.txt");
  //         };
  //     }
  //   );
})();
