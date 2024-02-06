var fs = require('fs');
var Q = require('q');

function readFirstLine(path) {
    return Q.promise(function (resolve, reject) {
        var rs = fs.createReadStream(path, { encoding: 'utf8' });
        var acc = '';
        var pos = 0;
        var index;
        rs
            .on('data', function (chunk) {
                index = chunk.indexOf('\n');
                acc += chunk;
                index !== -1 ? rs.close() : pos += chunk.length;
            })
            .on('close', function () {
                resolve(acc.slice(0, pos + index));
            })
            .on('error', function (err) {
                reject(err);
            })
    });
}

module.exports.readFirstLine = (path) => readFirstLine (path);