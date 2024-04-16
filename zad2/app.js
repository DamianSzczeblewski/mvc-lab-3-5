const express = require("express");

const PORT = 3000;

const router = express.Router();

const app = express();

app.set("view engine", "ejs");

app.use(
    router.get("/", (request, response, next) => {
        response.send("In progress...");
    })
);

app.use((request, response, next) => {
    response.send("404 Not Found");
}
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`)
});