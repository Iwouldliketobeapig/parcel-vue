# parcel-vue

this is a project of vue 、 parcel and sass

## dev
```text
npm run dev
```
## watch
```text
npm run watch
```

## build
```text
npm run build
```

### 默认配置
```test
// config/default.js
module.exports = {
  port: 1234, // dev启动端口号
  proxy: {
    target: 'http://172.19.3.186:25001', // dev下代理端口号
    apiVersion: '/api/v2' // 代理端口api版本
  }
}
```