var books = [
  { BookID: "1", Title: "Book 1", Author: "Author 1" },
  { BookID: "2", Title: "Book 2", Author: "Author 2" },
  { BookID: "3", Title: "Book 3", Author: "Author 3" },
];

const DishTypes = require("../models/DishTypesModel");

function handle_request(msg, callback) {
  console.log("Inside book kafka backend");
  console.log(msg);
  DishTypes.find({}, (error, result) => {
    if (error) {
      // res.writeHead(500, {
      //   "Content-Type": "text/plain",
      // });
      // res.end();
      console.log("inside if of error");
      callback(error, "Error");
    } else {
      // res.writeHead(200, {
      //   "Content-Type": "application/json",
      // });
      console.log(result);
      console.log("inside else (success)");
      callback(null, result);
      // res.end(JSON.stringify(result));
    }
  });
  console.log("after callback");
}

exports.handle_request = handle_request;
