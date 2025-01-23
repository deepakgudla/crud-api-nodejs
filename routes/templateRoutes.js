const express = require("express");
const { template, templateAll, templateid, updateid, deleteid } = require("../controller/TemplateController");

const templateRouter = express();

templateRouter.post("/template", template)
templateRouter.get("/template", templateAll)
templateRouter.get("/template/:id", templateid)
templateRouter.put("/template/:id",  updateid)
templateRouter.delete("/template/:id", deleteid)

module.exports = templateRouter;
