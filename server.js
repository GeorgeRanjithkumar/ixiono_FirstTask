const express = require("express")
const app = express()

const router = require("./router")

const cors = require("cors")
app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.send("its working")
})

app.use("/router", router)

app.listen(5000, () => {
    console.log("server started");
})