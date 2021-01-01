# nodejs 的小试牛刀

---

### 开发背景

学习nodejs中的验证信息 MD5,并不算是个加密

项目中将appId和密钥作为验证信息中的一部分，实现了当每一次执行翻译行为的时候，调用百度api 都能够较安全的实现校验。

实际上前端项目这个并不安全，appID和密钥最好是在服务器进行加密返回，以防他人获取，盗用。

### 小记

本项目的appId和密钥已经停用，诸位开发者可以，在private.ts中替换自己的appID和密钥

### 使用

~~~
yarn global add ts-node-dev 
~~~

```
ts-node-dev src/cli.ts hello //hello 为要翻译的中文或英文
```

```
tsc //可以将ts文件转化为js文件 打包到dist文件中，可以发布到npm仓库中
```

---

### 希望喜欢的朋友star一下，你的赞是对开发者，最好的鼓励。
