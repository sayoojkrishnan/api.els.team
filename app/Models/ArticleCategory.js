'use strict'

const Model = use('Model')

class ArticleCategory extends Model {
  static get createdAtColumn () {
    return null
  }

  static get updatedAtColumn () {
    return null
  }
}

module.exports = ArticleCategory
