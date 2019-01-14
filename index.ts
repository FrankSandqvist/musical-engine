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

const getWebsite = async (url: string) => {
  console.time('Getting raw data')
  const rawData = await fetch(url);
  console.timeEnd('Getting raw data')

  console.time('Converting to text')
  const text = await rawData.text();
  console.timeEnd('Converting to text')

  return text;
};

(async () => {
  const googlesHomepageHtml = await getWebsite("https://google.com");
})();
