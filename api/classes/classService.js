
const classesModel = require("./classModel");
exports.list = (callback) => {
    classesModel.list().then(function(results) {
        callback(results);
    }).catch(e => {});
}
exports.detail = (id, callback) => classesModel.list().then(function(results) {
    
    var result = results.find(c => c.id === id);
    callback(result);
})
exports.create = (classObj, callback) => classesModel.list().then(function(results) {
    classObj.id = results.length +1;
    classesModel.create(classObj.id, classObj.name, () => {
        callback(classObj.id);
    })
})