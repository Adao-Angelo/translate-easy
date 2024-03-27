import Express from "express";
import { translateRouter } from "./routes/translate.router";

dotenv.config();
import dotenv from "dotenv";
const port = 5000;

const app = Express();
app.use(Express.json());
app.use(translateRouter);

app.listen(port, () => {
  console.log("server running at port: ", port);
});
