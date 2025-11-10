"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (_, res) => {
    res.send({ message: 'API TA RUNFANDO' });
});
exports.default = router;
