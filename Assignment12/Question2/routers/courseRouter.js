const express = require('express');
const Course = require("../models/course");


const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json(Course.getAll());
});

router.get('/:courseId', (req, res, next) => {
    res.json(Course.findById(req.params.courseId));
});


router.post('/', (req, res, next) => {
    const addedCr = new Course(req.body.id, req.body.name).save();
    res.status(201).json(addedCr);
});


router.delete('/:courseId', (req, res, next) => {
    res.json(Course.deleteById(req.params.courseId));
});

router.put('/:courseId', (req, res, next) => {
    const editedCr = new Course(req.params.courseId, req.body.name).edit();
    res.json(editedCr);
});


module.exports = router;