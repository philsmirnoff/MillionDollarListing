import express from "express"
import morgan from "morgan"
import cors from "cors"

const app = express();

// midllewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get('/api', (req, res) => {
    res.json({
      data: "hello from node.js api"
    })
})

app.listen(8000, () => console.log("server is running on port 8000"));
