const userDate = require('./user');
const userCar = require('./car');
const path = require('path');
console.log(userDate.user)
console.log(userCar.car)
console.log(path.basename(__filename))
console.log(path.dirname(__dirname))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.join(__dirname,'templates','index.html' ))