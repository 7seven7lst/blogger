const Promise = require('bluebird');
const _ = require('lodash');
const db = require('./models');
const { Op } = require('sequelize');

const getBlog = (req, res) => {
  const { blog_id } = req.params;
  let queryObj = {
    where: {
      id: blog_id
    },
  };
  return db.sequelize.query("UPDATE blogs SET visit_count = visit_count+1 WHERE id =?",
  { replacements: [blog_id], type: db.sequelize.QueryTypes.UPDATE })
  .then(() => {
    return db.Blog.findOne(queryObj)
  })
  .then(blog => {
    res.json(blog);
  })
  .catch(err => {
    console.log("err fetching getting blog >>>", err);
  })
};

const getBlogs = (req, res) => {
  const { title_keyword, content_keyword, page_size, current_page, category } = req.query;
  const queryObj = {};
  if(content_keyword) {
    queryObj.content = { [Op.like]: `%${content_keyword}%` };
  }
  if(title_keyword) {
    queryObj.title = { [Op.like]: `%${title_keyword}%` };
  }
  if(category) {
    queryObj.category = category;
  }
  const options = {
    page: +current_page || 1, // Default 1
    paginate: +page_size || 6, // default to 6
    order: [['visit_count', 'DESC']],
    where: queryObj,
  };
  return db.Blog.paginate(options)
  .then(results => {
    res.json(results);
  })
  .catch(err => {
    console.log("error querying blogs>>", err);
  })
};

const getPopularBlogs = (req, res) => {
  const { limit } = req.query;
  const options = {
    order: [['visit_count', 'DESC']],
    limit: limit ? +limit : 5,
  };
  return db.Blog.findAll(options)
  .then(results => {
    res.json(results);
  })
  .catch(err => {
    console.log("error querying blogs>>", err);
  })
}

const createBlog = (req, res) => {
  const newBlog = req.body;
  return db.Blog.create(newBlog)
  .then(response => {
    console.log(response);
    res.json(response);
  })
  .catch(err => {
    console.log("error inserting blog>>>", err);
  })
}

const updateBlog = (req, res) => {
  const { blog_id } = req.params;
  let updatedBlog = req.body;
  return db.Blog.update(_.omit(updatedBlog, 'id'),{
    returning: true,
    plain: true,
    where: {id: blog_id}
  })
  .then(response => {
    return db.Blog.findOne({
      where: {
        id: blog_id,
      }
    })
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    console.log("err updating blog is >>>", err);
  })
}

const deleteBlog = (req, res) => {
  const { blog_id } = req.params;
  return db.Blog.destroy({
    where: {id: blog_id}
  })
  .then((response) => {
    res.json(response);
  })
  .catch(err => {
    console.log("err deleting blog is >>>", err);
  })
}

module.exports = {
  getBlog,
  getBlogs,
  getPopularBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
