const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    id: {
      allowNull: false,
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.STRING,
    },
    image_url: {
      type: DataTypes.STRING,
    },
    visit_count: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 0,
    },
  }, {
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    tableName: 'blogs',
  });
  Blog.associate = function(models) {
    // associations can be defined here
  };
  sequelizePaginate.paginate(Blog);
  return Blog;
};