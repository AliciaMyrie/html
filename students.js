import expres from "express";
import cors from "cors";
const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

let students = ["bob", "samantha", "lily", "grace", "jim"];

app.get("/", (req, res) => {
  let output = "<html><body>";

  output = output + "hello there html";

  let output = "</body></html>";

  res.send(output);
});

app.listen(port, () => {
  console.log("I was needed");
});
