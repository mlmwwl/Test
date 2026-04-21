/**
 * convertCountryCode.js
 * 用途：将 Apple 地图地理配置请求中的 country_code=CN 替换为 country_code=US
 * 适用：Stash Script - HTTP Response
 */

const url = $response.url || "";
const headers = $response.headers || {};
const body = $response.body || "";

// 修正 URL 中的 country_code 参数（针对重定向场景）
let newUrl = url.replace(/country_code=CN/gi, "country_code=US");

// 若响应体含有 country_code 相关字段也一并替换（JSON 场景）
let newBody = body.replace(/"country_code"\s*:\s*"CN"/gi, '"country_code": "US"')
                   .replace(/country_code=CN/gi, "country_code=US");

$done({
  headers: headers,
  body: newBody
});
