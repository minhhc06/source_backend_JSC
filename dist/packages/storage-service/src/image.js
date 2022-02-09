"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUpload = void 0;
const multer = require('multer');
const { extname, resolve } = require('path');
const storage = multer.diskStorage({
    destination: (req, file, done) => {
        if (!file)
            return done(new Error('Upload file error'), null);
        const folder = req.path.match(/(\/[a-z]+)/)[0] + '/';
        return done(null, resolve(process.cwd(), 'uploads' + (folder !== null && folder !== void 0 ? folder : '/')));
    },
    filename: (req, file, done) => {
        if (file) {
            const imagePattern = /(jpg|jpeg|png|gif|svg)/gi;
            const mathExt = extname(file.originalname).replace('.', '');
            if (!imagePattern.test(mathExt)) {
                return new TypeError('File format is not valid');
            }
            return done(null, Date.now() + '-' + file.originalname);
        }
    },
});
exports.fileUpload = multer({ storage, limits: 10240000 });
//# sourceMappingURL=image.js.map