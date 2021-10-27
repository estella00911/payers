
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    static associate(models) {
      Article.belongsTo(models.User)
    }
  }
  Article.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    content: DataTypes.TEXT,
    is_deleted: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article'
  })
  return Article
}
