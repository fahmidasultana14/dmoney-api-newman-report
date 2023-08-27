const newman = require("newman");

newman.run(
  {
    //collection: require("./collection/DMoneyf.postman_collection.json"), // pointing to local JSON file.
    collection:'https://api.postman.com/collections/29209440-1c5196bf-b044-4add-88be-a8bc527619c5?access_key=PMAT-01H8NYZDSRY8A6YZH428V0X6YD',
    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
