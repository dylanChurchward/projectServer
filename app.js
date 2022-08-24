const app = require("express")();
// const exp = express(); // middleware for parsing JSON 
const PORT = process.env.PORT || 3000;

// exp.use(express.json()); // use the middle for parsing 


app.get("/", (req, res) => {
    res.send("Hello world");
});

// test method
// app.post('/tshirt/:id', (req, res) => {

//     const { id } = req.params;
//     const { logo } = req.body;

//     if (!logo) {
//         res.status(418).send({ message: 'We need a logo!' });
//     } else {
//         res.send({tshirt: `Tshirt with your ${logo} and ID of ${id}`});
//     }
// });

// test method
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