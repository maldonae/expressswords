import Express from "express";
const app = Express();

const data = ["lorem", "ipsum", "dolor", "sit", "amet"];

const dataTab = (req, res) => {
	res.json(data);
};
app.get("/", dataTab);

const port = 3310;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
