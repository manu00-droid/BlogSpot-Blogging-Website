const mongoose = require('mongoose');
const marked = require("marked");  //convert markdown to html and vice versa
const slugify = require("slugify"); // used to create a slug for each article i.e. a url friendly version of the title
const createDomPurify = require("dompurify"); // used to sanitize the html i.e. remove any malicious code
const { JSDOM } = require("jsdom"); // used to create a virtual dom to sanitize the html
const dompurify = createDomPurify(new JSDOM().window); // create a virtual dom to sanitize the html


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    markdown: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    sanitizedHTML: {
        type: String,
        required: true
    }
});

/* arrow func doesn't work here
The issue with this.title being undefined in the pre hook of the articleSchema
could be due to the use of an arrow function to define the hook.
Arrow functions do not bind this to the context of the schema instance,
causing it to be undefined.*/
articleSchema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
    if (this.markdown) {
        this.sanitizedHTML = dompurify.sanitize(marked.parse(this.markdown));
    }
    next();
});


module.exports = mongoose.model('Article', articleSchema);