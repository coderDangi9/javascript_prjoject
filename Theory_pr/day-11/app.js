// const student = {
//   name: "Sandip ",
//   marks: 96.7,
//   printMarks: function () {
//     console.log("marks=", this.marks);
//   },
// };

const employee = {
  calTax1() {
    console.log(`tax rate is 10%`);
  },
  calTax2: function () {
    console.log(`tax rate is 20%`);
  },
};

const salary = {
  perMonth: 500000,
};
const salary2 = {
  perMonth: 500000,
};
const salary3 = {
  perMonth: 500000,
};
const salary4 = {
  perMonth: 500000,
};

salary.__proto__ = employee;
salary2.__proto__ = employee;
salary3.__proto__ = employee;
salary4.__proto__ = employee;
