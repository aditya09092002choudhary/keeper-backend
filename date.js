const date = new Date();
const day=date.getDate();
const mon=date.getMonth();
const year=date.getFullYear();

const tDate = day+"/"+mon+"/"+year;

module.exports = tDate;