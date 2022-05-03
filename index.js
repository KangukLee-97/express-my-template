'use strict';
require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const logger = require('./config/logger');
const app = express();

// ** 새로 추가한 Router require 필수! **
const { UserRouter } = require('./src/routers/userRouter');

// view-engine setting
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug/ejs etc.');

app.use(express.json()); // json으로 이루어진 Request Body 처리
app.use(express.urlencoded({ extended: false })); // qs 모듈 관련
app.use(cors()); // cors 설정 -> 필요시 검색 후 사용
app.use(compression()); // 페이지 압축 -> 용량 감소

// 처음 들어가면 보이는 사이트 설정
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// app.use(express.static(path.join(__dirname, 'public')));  -> 정적파일 허용

// ** 위에서 Require 후 여기에 새로 생성한 Router 추가할 것! **
UserRouter(app);

// 개발 환경, 배포 환경에 따라 port 번호 분리
let port = process.env.PORT || 3000;   // 환경 변수에 저장되어 있는 PORT가 없으면 3000번 포트 사용


app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
