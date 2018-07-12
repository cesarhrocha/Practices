const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, ELETE, OPTIONS');
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added yupi"
  });
});


app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "12345",
      title: "Titulo 1",
      content: "This content "
    },
    {
      id: "123452",
      title: "Titulo 2",
      content: "This content x2 "
    }
  ];
  res.status(200).json({
    message: 'Post fetched success',
    posts: posts
  });
});

module.exports = app;
