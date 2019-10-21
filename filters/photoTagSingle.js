const path = require('path');

module.exports = function (value) {
    let p = path.dirname(value) + "/" + path.basename(value, '.jpg');
    return `<img src="${p}@750w.jpg">`
};
