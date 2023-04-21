const express = require("express");
const mongoose = require("mongoose");
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
app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        author: 'Test Author',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        author: 'Test Author 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('articlesView/index', { articles: articles });
})

//using the articlesView router
app.use('/articles', articleRouter);

app.listen(5000);