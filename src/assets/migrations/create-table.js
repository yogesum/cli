module.exports = {
  up: (db, Sequelize) => db
    .createTable('<%= tableName %>', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },<%
        attributes.forEach(({ dataType, fieldName, dataFunction }) => { %>
      <%= fieldName %>: {
        type: Sequelize.<%= dataFunction
          ? `${dataFunction.toUpperCase()}(Sequelize.${dataType.toUpperCase()})`
          : dataType.toUpperCase() %>,
      },<% }) %>
      <%= createdAt %>: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE,
      },
      <%= updatedAt %>: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        type: Sequelize.DATE,
      },
    }),

  down: db => db.dropTable('<%= tableName %>'),
}
