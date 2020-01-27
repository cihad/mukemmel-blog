'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return queryInterface.addColumn(
        'Posts',
        'short',
        { type: Sequelize.DataTypes.TEXT },
        { transaction }
      )
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(transaction => {
      return queryInterface.removeColumn('Posts', 'short', { transaction })
    });
  }
};
