'use strict';

const columnAndTypes = [{
    name: 'isAdmin',
    type: (Sequelize) => {
        return {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }
}];

module.exports = {
  async up(queryInterface, Sequelize) {
      return Promise.all(
          columnAndTypes.map(c => {
              return queryInterface.addColumn(
                  'Users',
                  c.name,
                  c.type(Sequelize)
              )
          })
        )
    },
  async down(queryInterface, Sequelize) {
      return Promise.all(
          columnAndTypes.map(c => {
              return queryInterface.removeColumn (
                  'Users',
                  c.name,
              )
          })
      )
  }
};