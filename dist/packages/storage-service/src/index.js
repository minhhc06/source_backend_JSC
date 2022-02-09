"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const image_1 = require("./image");
const path = require("path");
const express = require('express');
const app = express();
const port = 8080;
require('dotenv').config({ path: path.resolve('../../.env') });
app.get('/', (req, res) => {
    res.send('Hello world. Have a good day!');
});
app.post('/:url/', image_1.fileUpload.single('image'), async (req, res) => {
    try {
        if (req.file.fieldname !== 'image')
            return res.status(400).json({ msg: 'image is required' });
        const fileName = process.env.BASE_URL +
            '/uploads/' +
            req.params.url +
            '/' +
            req.file.filename;
        return res.status(200).json({ msg: 'upload success', file: fileName });
    }
    catch (e) {
        return e.message;
    }
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map