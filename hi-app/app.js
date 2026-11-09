const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    console.log(`Visitor accessed homepage at ${new Date().toISOString()}`);

    res.send(`
        <html>
            <head>
                <title>Hi Everyone</title>
            </head>
            <body style="font-family: Arial; text-align:center; margin-top:100px;">
                <h1>Hi Everyone 👋</h1>
                <h2>Minikube + Helm + ArgoCD + ELK Demo</h2>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`);
});