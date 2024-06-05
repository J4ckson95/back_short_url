import Express from "express";

const PORT: number = 8085;

const app = Express();
app.use(Express.json());

app.listen(PORT, () => console.log(`Running Server at port: ${PORT}`));
