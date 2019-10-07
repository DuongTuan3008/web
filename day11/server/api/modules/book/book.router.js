const express = require("express");
const router = express.Router();
const service = require("./book.service");

router.get("/api/book", function (req, res) {
    try {
        const data = await service.find(req.query);
        res.status(200).send({
            data: data,
        });
    } catch (err) {
        res.status(500).send({
            error: err.message,
        });
    }
})

router.post("/api/book", function (req, res) {
    try {
        const data = await service.create(req.body);
        res.status(200).send({
            data: data,
        });
    } catch (err) {
        res.status(500).send({
            error: err.message,
        });
    }
})

router.getById("/api/book/:id", function (req, res) {
    try {
        const data = await service.findById(req.body);
        res.status(200).send({
            data: data,
        });
    } catch (err) {
        res.status(500).send({
            error: err.message,
        });
    }
})

router.put("/api/book/:id", function (req, res) {
    try {
        const data = await service.update(req.body);
        res.status(200).send({
            data: data,
        });
    } catch (err) {
        res.status(500).send({
            error: err.message,
        });
    }
})