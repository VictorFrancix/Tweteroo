import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(json());

let users = [{
}];
let tweets = [{
	username: "bobesponja",
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  tweet: "eu amo o hub",
}];

app.post("/sign-up", (req, res) => {
  const body = req.body;
  const user = {
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

app.post("/tweets", (req, res) => {
  const { tweet } = req.body;
  const username = req.header("user");
  console.log(username)
  if (tweet === "" || username === "") {
    res.status(409).send("Tweet and user are required");
  }
  else {
    const usercheck = users.find((user) => user.username === username);
    if (usercheck !== undefined) {
      const tweetObj = {
        username,
        avatar : usercheck.avatar,
        tweet
      };
      
      tweets = [...tweets, tweetObj];

      res.status(201).send(tweetObj);
    }
    else{
      res.status(400).send("User does not exist");
    }
  }
});

app.get("/tweets", (req, res) => {
  const tenLastTweets = []
  for(let i = 0; i < tweets.length; i++) {
    tenLastTweets.push(tweets[i]);
  }
  res.status(200).send(tenLastTweets);
});

app.get("/tweets/:username",(req,res)=>{
  const {username}=req.params.username
let usertt=tweets.filter(tweet=> tweet.username===username)
  if(usertt.length>0){
  res.status(200).send(usertt)
}
else{
  res.status(400).send("User does not exist")
}
})

app.listen(5000, () => {
  console.log(chalk.bold.green("Server is running on port 5000"));
});

