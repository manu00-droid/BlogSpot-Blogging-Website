# BlogSpot - A Blogging Website

BlogSpot is a web application that allows users to create, publish, edit, and delete blog posts. It is built using Node.js, Express, and MongoDB. The application provides a user-friendly interface that enables users to perform the following functions:

- Create and publish new blog posts using markdown
- View all available blog posts
- Read specific blog posts
- Edit existing blog posts
- Delete blog posts

## Getting Started

To get started with BlogSpot, follow the instructions below:

### Prerequisites

- Node.js (version 12 or later)
- MongoDB (version 4.2 or later)

### Installing

1. Clone the repository:

```
git clone https://github.com/manu00-droid/BlogSpot-Blogging-Website
```

2. Install dependencies:

```
cd BlogSpot
npm install

```
3. Create a `.env` file in the root directory of the project and add the following:
```
PORT=3000
MONGODB_URI=mongodb://localhost/blogspot
```

Note: You can change the value of `PORT` to any port number you want to use.

### Running the Application

1. Start the application:

```
npm start
```

2. Open your browser and go to `http://localhost:3000` (or the port number you specified in the `.env` file).

## Using the Application

### Creating a New Blog Post

1. Click on the "New Post" button in the navigation bar.
2. Enter the title and content of your blog post.
3. Click on the "Save" button to publish your post.

### Viewing All Available Blog Posts

1. Click on the "All Posts" button in the navigation bar.
2. You will see a list of all the available blog posts.

### Reading a Specific Blog Post

1. Click on the title of the blog post you want to read.
2. You will be taken to a page that displays the full content of the post.

### Editing an Existing Blog Post

1. Click on the title of the blog post you want to edit.
2. Click on the "Edit" button.
3. Make the necessary changes to the title and/or content of the post.
4. Click on the "Save" button to update the post.

### Deleting a Blog Post

1. Click on the title of the blog post you want to delete.
2. Click on the "Delete" button.
3. Confirm that you want to delete the post.

## Built With

- Node.js
- Express
- MongoDB
- EJS

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.
