const express = require('express');
const router = express.Router();
const classController = require("./classController");
/* GET users listing. */
router.get('/', classController.list);

/* GET class detail. */
router.get('/:id', classController.detail);

/* POST new class*/
router.post('/', classController.create); 
module.exports = router;
