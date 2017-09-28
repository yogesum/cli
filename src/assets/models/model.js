const { DataTypes, Model } = require('sequelize')

const sequelize = require('../../db')

class <%= name %> extends Model {
  static associate() {
    // associations can be defined here
  }
}

export default <%= name %>.init({<% attributes.forEach(({ dataType, fieldName, dataFunction }) => { %>
  <%= fieldName %>: DataTypes.<%=
    dataFunction
      ? `${dataFunction.toUpperCase()}(DataTypes.${dataType.toUpperCase()})`
      : dataType.toUpperCase()
  %>,<% }) %>
}, { sequelize<%= underscored ? ', underscored: true' : '' %> })
