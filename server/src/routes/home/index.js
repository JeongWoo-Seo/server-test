"use strict";

const { Router } = require("express");
const express = require("express");
const router = Router();
const ctrl = require("./home.ctrl");

router.get('/',ctrl.home);
router.get('/login',ctrl.login);

module.exports = router;