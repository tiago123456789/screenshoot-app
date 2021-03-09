const express = require("express");
require("dotenv").config();
const app = express();
const screenshootService = require("./services/ScreenshootService");

// Enable middleware parse data for json
app.use(express.json());

// Enable middleware to server static files
app.use(express.static("./public"));

app.post("/api/screenshoots", async (request, response) => {
    const data = request.body;
    const dataReturned = await screenshootService.getByDomain(data.domain);
    return response.json(dataReturned)
})

app.listen(process.env.PORT, () => console.log("Server is up!!!"));