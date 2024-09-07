import express from "express";

import { Controller } from "../Controllers/controller.js";

const router = express.Router();
const newController = new Controller();

router.post("/getData", newController.postAPI);

export default router;
