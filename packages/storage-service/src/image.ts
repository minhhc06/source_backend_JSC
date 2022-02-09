import { Request } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const multer = require('multer');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { extname, resolve } = require('path');

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, done: any) => {
    if (!file) return done(new Error('Upload file error'), null);
    const folder = req.path.match(/(\/[a-z]+)/)[0] + '/';
    return done(null, resolve(process.cwd(), 'uploads' + (folder ?? '/')));
  },
  filename: (req: Request, file: Express.Multer.File, done: any) => {
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

export const fileUpload = multer({ storage, limits: 10240000 });
