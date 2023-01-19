const express = require("express");
const templatee = require("../model/template")
const { template, templateAll, templateid, updateid, deleteid } = require("../controller/TemplateController");



const templateRouter = express();
templateRouter.post("/template", template)
templateRouter.get("/template", templateAll)
templateRouter.get("/template/:id", templateid)
templateRouter.patch("template/:id",  updateid)
templateRouter.delete("/template/:id", deleteid)

module.exports = templateRouter;