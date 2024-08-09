import express from "express";
const app = express();
app.use(express.json());
app.post('/hello', (req, res, next) => {
    res.send("hello");
    console.log(req.body.name);
});
app.listen(5000, () => console.log("Server Started"));
//# sourceMappingURL=index.js.map