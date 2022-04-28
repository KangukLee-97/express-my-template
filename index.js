'use strict';
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('./config/logger');
const app = express();

// ** 새로 추가한 Router require 필수! **
const { UserRouter } = require('./src/routers/userRouter');

// view-engine setting
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug/ejs etc.');

app.use(express.json()); // json으로 이루어진 Request Body 처리
app.use(express.urlencoded({ extended: true })); // qs 모듈 관련
app.use(cors()); // cors 설정 -> 필요시 검색 후 사용
// app.use(express.static(path.join(__dirname, 'public')));  -> 정적파일 관련

// ** 위에서 Require 후 여기에 새로 생성한 Router 추가할 것! **
UserRouter(app);

// 개발 환경, 배포 환경에 따라 port 번호 분리
let port;

switch (process.env.NODE_ENV) {
  case 'development':
    port = 3001;
    break;
  case 'production':
    port = 3002;
    break;
  default:
    port = 3000;
    break;
}

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
