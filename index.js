const express = require("express");
const app = express();

const db = require("./dbconfig");

//db.init(); 

// app.get("/users", function )
// app.get("/todos")

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
