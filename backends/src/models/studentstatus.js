'use strict';
module.exports = (sequelize, DataTypes) => {
  var StudentStatus = sequelize.define('StudentStatus', {
    status: DataTypes.STRING
  }, {});
  StudentStatus.associate = function(models) {
    // associations can be defined here
  };
  return StudentStatus;
};