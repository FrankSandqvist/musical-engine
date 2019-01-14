var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
/*
const doneHandler = () => {
    console.log('I\'m done');
}

setTimeout(doneHandler, 2000);


console.log("Fetching now");

fetch("http://www.google.com")
  .then(data => {
    return data.text();
  })
  .then(text => {
    console.log(text);
  })
  .catch(err => {
    console.log(err);
  });

  */
const getWebsite = (url) => __awaiter(this, void 0, void 0, function* () {
    console.time('Getting raw data');
    const rawData = yield fetch(url);
    console.timeEnd('Getting raw data');
    console.time('Converting to text');
    const text = yield rawData.text();
    console.timeEnd('Converting to text');
    return text;
});
(() => __awaiter(this, void 0, void 0, function* () {
    const googlesHomepageHtml = yield getWebsite("https://google.com");
    console.log(googlesHomepageHtml);
}))();
