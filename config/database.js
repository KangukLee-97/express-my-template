'use strict';
require('dotenv').config();

/**
 * SQL이 아닌 ORM을 사용하면 Models-Routes-Controllers-Services 구조
 * 아래의 mysql은 SQL을 사용할 때 사용하면 좋은 코드이다.
 */

/**
 * mysql vs mysql2 : promise (비동기 처리)
 * node, express에서는 promise 주로 사용 -> mysql2
 * 환경 변수 or secret을 통해서 구분
 */
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '',
  port: 3306,
  user: '',
  password: '',
  database: '',
  connectionLimit: 10,
});

module.exports = pool;

// if (process.env.NODE_ENV === 'development/production')
// -> db명 구분해서 pool 생성!
