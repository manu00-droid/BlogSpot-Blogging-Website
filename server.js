const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/articleModel");
const articleRouter = require("./routes/articlesRouter");
const app = express();

//connecting to the database
mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

//setting the view engine to ejs
app.set('view engine', 'ejs');

//https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
app.use(express.urlencoded({ extended: false }));

//rendering the index.ejs file
app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
    res.render('articlesView/index', { articles: articles });
})

//using the articlesView router
app.use('/articles', articleRouter);

app.listen(5000);