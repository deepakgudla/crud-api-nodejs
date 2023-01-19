const mongoose = require('mongoose')
const TemplateSchema = mongoose.Schema(
    {
        template_name: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
);

module.exports = mongoose.model("Template", TemplateSchema)