'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        userName: 'Usman',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};