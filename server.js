const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);
app.use(express.urlencoded({ extended: false }));
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
    res.render('articles/index', { articles: articles });
})

app.listen(5000);