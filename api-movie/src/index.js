import express from "express";
import cors from "cors";
import { connectDatabase } from "./database/db.js";
import routes from "./routes.js";

const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());
app.use(routes);

connectDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log("Servidor e banco de dados rodando na porta: ", port)
    );
  })
  .catch((e) => console.log(e));