const router = require('express').Router();
const blogsController = require('./controller');

router
  .get('/blogs', blogsController.getBlogs)
  .get('/blogs/:blog_id', blogsController.getBlog)
  .post('/blogs', blogsController.createBlog)
  .put('/blogs/:blog_id', blogsController.updateBlog)
  .delete('/blogs/:blog_id', blogsController.deleteBlog);

module.exports = router;