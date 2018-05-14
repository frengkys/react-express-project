'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    student_no: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telp: DataTypes.STRING,
    address: DataTypes.STRING,
  }, {});
  Student.associate = function(models) {
    // associations can be defined here\
    Student.belongsTo(models.StudentStatus, {foreignKey:'statusId', targetKey: 'id'})
  };
  return Student;
};