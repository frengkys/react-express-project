'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StudentStatuses', [{
      status : 'Active',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      status : 'Graduated',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      status : 'Drop Out',
      createdAt : new Date(),
      updatedAt : new Date(),
    },
    {
      status : 'Leave',
      createdAt : new Date(),
      updatedAt : new Date(),
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('StudentStatuses', null, {});
    }
};
