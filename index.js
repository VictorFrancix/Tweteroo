import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(json());

let users = [];

app.post("/sign-up", (req, res) => {
  const body = req.body;
  let user = {
      username: body.username,
      avatar: body.avatar,
  };
  if (users.find(user => user.username === body.username)) {
    res.status(409).send("Username already exists");
  }
  else if(user.username === "" || user.avatar === "") {
    res.status(400).send("Username and avatar are required");;
  }
  else {
    users = [...users, user];
    res.status(201).send(users);
  }
});

app.listen(5000, () => {
  console.log(chalk.bold.green("Server is running on port 5000"));
});