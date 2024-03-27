// router.js
"using strict";

const contentTypes = require('./content-types');

// Listing 7.6 (p. 123~124)
const httpStatus = require('http-status-codes'),
  ContentTypes = require('./content-types'),
  utils = require("./utils");

const routes = {
    "GET": {},
    "POST": {}
  };

// 라우트에 따른 콜백 함수를 처리하기 위한 함수 handle의 생성
exports.handle = (req, res) => {
  try {
      routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
    console.log("error: " + e);
  }
};

// main.js로부터 routes에 등록하기 위한 get 및 post 함수 생성
exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;  
};