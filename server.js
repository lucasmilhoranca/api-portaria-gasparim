import app from "./app.js";
import "dotenv/config";

const port = 3000;

app.listen(port, () => console.log(`Servidor rodando http://localhost:${port}`));