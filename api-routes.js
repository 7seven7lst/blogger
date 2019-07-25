const router = require('express').Router();
const blogsController = require('./controller');

router
    // /api/v0/upload-image =>upload image
  .post('/upload-image', blogsController.uploadNewImage)
  // /api/v0/blogs/popular =>get popular blogs
  .get('/blogs/popular', blogsController.getPopularBlogs)
  // /api/v0/blogs => get blogs
  .get('/blogs', blogsController.getBlogs)
  // /api/v0/blogs/:blog_id => get a blog
  .get('/blogs/:blog_id', blogsController.getBlog)
  // /api/v0/blogs => post blogs
  .post('/blogs', blogsController.createBlog)
  // /api/v0/blogs/:blog_id => update a blog
  .put('/blogs/:blog_id', blogsController.updateBlog)
  // /api/v0/blogs/:blog_id => delete a blog
  .delete('/blogs/:blog_id', blogsController.deleteBlog);

module.exports = router;