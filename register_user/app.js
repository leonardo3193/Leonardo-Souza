const express = require('express');
const { json } = require('express/lib/response');
const app = express();

/*Include Tables to DATABASE ⇩*/
const User = require('./models/User'); // Include "User Table" to database
/*Include Tables to DATABASE ⇧*/


app.use(express.json()); // prepare to receive JSON formart

app.get("/", async (requisition, answer) => {
  answer.send("Home Page");
});

app.post("/register", async (requisition, answer) => {
  console.log(requisition.body);

  /*registration verification DATABASE*/
  await User.create(requisition.body)
    .then(() => {
      return answer. json({
        error: false,
        message: " User registred successfully!"
      });
    }).catch(() => {
      return answer.status(400).json({
        error: true,
        message: " Error registering User!"
      });
    });

  //answer.send("Home Page");
});

app.listen(8080, () => {
  console.log("Server started on port 8080: http://localhost:8080");
});
