const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const extraRunByEachTeam = require("./ipl/extraRunByEachTeam");
const topEconomicalBowler = require("./ipl/topEconomicalBowler");
const story = require("./ipl/story");
const express = require('express');

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result1 = matchesPlayedPerYear(matches);
      let result2 = matchesWonByEachTeam(matches);
      let result5 = story(matches);
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let result3 = extraRunByEachTeam(deliveries, matches);
        let result4 =  topEconomicalBowler(deliveries, matches);
        let arr1 = [result1, result2, result5, result3, result4];
        let arr2 = ["matchesPlayedPerYear", "matchesWonByEachTeam", "story", "extraRunByEachTeam", "eco"];
        saveData(arr1, arr2)
      }); 
    });
}

function saveData(arr1, arr2) {
  const jsonData = {};
  let j = 0;
  for(let i of arr2){
    jsonData[i] = arr1[j++];
  }
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
main();

const app = express();
app.use(express.static(__dirname + "/public"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listning to ${port}`));
