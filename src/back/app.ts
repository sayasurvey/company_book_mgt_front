import express, { Request, Response, Application } from "express";

export const app: Application = express();
const port = 3010;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});