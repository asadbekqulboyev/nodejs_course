const fs = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname, 'templates','december.txt'), err => {
    if (err) throw new Error()
    console.log('Error')
}
)