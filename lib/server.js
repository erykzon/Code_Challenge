const Controller = require("../lib/controllers/CodeController")
const express = require("express")

const app = express()
app.use(express.json())
const port = 3000

app.get("/", (request, response) => {
    response.json({message: "Code Challengue welcome!"});
});

app.get("/v1/students", (request, response) => {
    const All = Controller.getAllStudents()
    response.json(All);
});

app.get("/v1/students/email", (request, response) => {
    const email = Controller.getStudentsHaveCertificacion()
    response.json(email);
});

app.get("/v1/students/over500", (request, response) => {
    const over500 = Controller.getStudentsCredits()
    response.json(over500);
});


app.listen(port, () => {
    console.log(`CodeChallengue API in localhost:${port}`);
}); 