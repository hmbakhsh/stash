import express from "express";
import { oai, rootRouteDef } from "./docs/docs";

const PORT = process.env.PORT;
if (!PORT) throw new Error("PORT not declared in .env file.");

const app = express();

app.use(express.json());
app.use(oai);

app.get("/", rootRouteDef, (req, res) => {
	res.json({ message: "api running" });
});
app.use("/docs", oai.swaggerui());

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
