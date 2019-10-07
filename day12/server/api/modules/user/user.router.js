import { Router } from "express";
const router = Router();
import { find, findById, create } from "./user.service";

router.get("/", async function (req, res) {
    try {
        const data = await find(req.query);
        res.status(200).send({
            data: data
        });
    } catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
});

router.get("/:id", async function (req, res) {
    try {
        const data = await findById(req.params.id);
        res.status(200).send({
            data: data
        });
    } catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
});

router.post("/", async function (req, res) {
    try {
        const data = await create(req.body);
        res.status(200).send({
            data: data
        });
    } catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
});

router.put("/:id", async function (req, res) {
    try {
        const data = await find(req.params.id, req.body);
        res.status(200).send({
            data: data
        });
    } catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
});

router.delete("/:id", async function (req, res) {
    try {
        const data = await find(req.params.id);
        res.status(200).send({
            data: data
        });
    } catch (err) {
        res.status(500).send({
            error: err.message
        });
    }
});

export default router;