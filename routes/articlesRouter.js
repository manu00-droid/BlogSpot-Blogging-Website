const express = require('express');
const Article = require('./../models/articleModel');
const router = express.Router();


//new article render
router.get('/new', (req, res) => {
    res.render("articlesView/new", { article: new Article() });
});

//render a specific article
router.get('/:id', (req, res) => {
    const fetchedArticle = Article.findById(req.params.id);
    if (fetchedArticle == null) res.redirect('/');
    res.render('articlesView/show', { article: fetchedArticle });
});

//create a new article
router.post('/', async (req, res) => {
    //fetching the data from the form from new.ejs
    let article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    });
    //saving the data to the database
    try {
        article = await article.save();
        res.redirect(`/articles/${article.id}`);
    }
    catch (e) {
        console.log(e);
        res.render('articlesView/new', { article: article });
    }
});

// export this articlesView router to be used in server.js
module.exports = router;
