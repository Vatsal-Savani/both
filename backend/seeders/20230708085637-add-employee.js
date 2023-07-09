'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("employees", [
      {
        firstName: "vatsal",
        lastName: "savani",
        email: "vatsal@gmail.com",
        password: "vatsal@333",
        gender: "male",
        dob: "2002/02/21",
        doj: "2023/06/12",
        phone: 123,
        deptId: "1",
        wstId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "honey",
        lastName: "patel",
        email: "honeypatel@gmail.com",
        password: "honey@333",
        gender: "male",
        dob: "2002/02/21",
        doj: "2023/06/12",
        phone: 123,
        deptId: "1",
        wstId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('employees', null, {});
  }
};
