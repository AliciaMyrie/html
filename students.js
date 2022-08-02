import expres from "express";
import cors from "cors";
const app = express();
const port = 4001;

app.use(cors());
app.use(express.json());

let students = ["bob", "samantha", "lily", "grace", "jim"];

app.get("/", (req, res) => {
  let output = "<html><body><ul>";
});
//   output = output + "hello there html";
for (let i = 0; i < students.length; i++) {
  output = output + "<li><input type='checkbox'>" + students[i] + "</li>";

  output = "</ul></body></html>";

  res.send(output);
}

app.listen(port, () => {
  console.log("I was needed");
});
