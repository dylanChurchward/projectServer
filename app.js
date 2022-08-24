const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: `I'm a shirt`,
        size: `large`
    });
});

// Fire up the server
app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`);
});