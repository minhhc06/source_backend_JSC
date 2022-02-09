import { Request, Response } from 'express';
import { fileUpload } from './image';
import { BadRequestException, HttpException } from '@nestjs/common';
import * as path from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const app = express();
const port = 8080; // default port to listen
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: path.resolve('../../.env') });
app.get('/', (req: any, res: any) => {
  res.send('Hello world. Have a good day!');
});
app.post(
  '/:url/',
  fileUpload.single('image'),
  async (req: Request, res: Response) => {
    try {
      if (req.file.fieldname !== 'image')
        return res.status(400).json({ msg: 'image is required' });
      const fileName =
        process.env.BASE_URL +
        '/uploads/' +
        req.params.url +
        '/' +
        req.file.filename;
      return res.status(200).json({ msg: 'upload success', file: fileName });
    } catch (e) {
      return e.message;
    }
  },
);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
