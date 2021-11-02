const classService = require("./classService");
exports.list = function(req,res) {
    classService.list((result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "No class available"});
        }
    });
}
exports.detail = function(req,res) {
    const id = req.params.id;
    classService.detail(parseInt(id), (result) => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({message: "The class with the given ID wasn't found"});
        }
    });
}
exports.create = function(req, res) {
    const classObj = {
        name: req.body.name
    }
    classService.create(classObj, (id) => {
        if(id) {
            res.status(201).json({message: "Class created ", id: id});
        }
    });
}