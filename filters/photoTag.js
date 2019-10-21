const path = require('path');

module.exports = function (value) {
    let p = path.dirname(value) + "/" + path.basename(value, '.jpg');
    return `<img src="${p}@750w.jpg" srcset="
        ${p}@1400w.jpg 1400w,
        ${p}@818w.jpg 818w,
        ${p}@750w.jpg 750w,
        ${p}@400w.jpg 400w"
        sizes="100vw"></img>`
};
