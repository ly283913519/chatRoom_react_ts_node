// 将路径的目标统一指向根路径,详细路径用参数传进来
const path  = require('path');

exports.resolves = function (dir) {
    return path.join(__dirname, './../', dir);
};