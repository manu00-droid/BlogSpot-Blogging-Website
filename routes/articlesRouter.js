const express = require('express');
const Article = require('./../models/articleModel');
const router = express.Router();


//new article render
router.get('/new', (req, res) => {
    res.render("articlesView/new", { article: new Article() });
});

//edit article render
router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.render("articlesView/edit", { article: article });
});

//render a specific article
router.get('/:slug', async (req, res) => {
    const fetchedArticle = await Article.findOne({ slug: req.params.slug });
    if (fetchedArticle == null) res.redirect('/');
    res.render('articlesView/show', { article: fetchedArticle });
});

//create a new article
router.post('/', async (req, res, next) => {
    //fetching the data from the form from new.ejs
    req.article = new Article();
    next();
}, saveArticleAndRedirect('new'));

//edit an article
router.put('/:id', async (req, res, next) => {
    //fetching the data from the form from new.ejs
    req.article = await Article.findById(req.params.id);
    next();
}, saveArticleAndRedirect('edit'));

//delete an article
router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

//save article and redirect
function saveArticleAndRedirect(path) {
    return async (req, res) => {
        let article = req.article;
        article.title = req.body.title;
        article.description = req.body.description;
        article.markdown = req.body.markdown;
        try {
            article = await article.save();
            res.redirect(`/articles/${article.slug}`);
        }
        catch (e) {
            res.render(`articlesView/${path}`, { article: article });
        }
    }
}

// export this articlesView router to be used in server.js
module.exports = router;
