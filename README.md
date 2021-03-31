## 前言

- 之前没事，写一些比较常用或面试考察的手写方法，最近花了 `2` 天时间进行了反复修改完善并整理，金三银四，希望能帮到大家，`offer` 拿到手软，`BAT` 不再是梦！
- 文中代码对应的详细注释和具体使用方法都放在我的 [GitHub](https://github.com/detanx/write-methods) 上，欢迎 `Star`。
- 贴代码工具：[carbon](https://carbon.now.sh/)

### 1. 判断数据类型

#### 1.1 `typeof`

- `typeof` 返回基本数据类型（`null` 除外，由于设计失误 `typeof null` 返回 `object`）和引用类型（`function`）。
- `null`、`undefined`、`number`、`string`、`boolean`、`symbol`、`bigint`、`function`。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c0898b17f4f4f4bb40a3615573d3aa2~tplv-k3u1fbpfcp-watermark.image)

#### 1.2 `instanceof`

- `instanceof` 用于判断一个变量是否某个对象的实例，返回 `true` / `false` 。
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d50bc13343d0414c9b06dd6651f37bda~tplv-k3u1fbpfcp-watermark.image)

#### 1.3 使用 `Object` 对象上的 `toString` 方法

- 通过 `call` 方法调用，返回的是一个固定格式的字符串“`[object Number]`”，我们去掉前面固定的 “`[object `”和后面的 “`]`”，剩下的就是我们要的结果，返回的是和内置名称一致的字符串（例如：`Date`、`RegExp`、`Math`、`JSON`、`BigInt`...）；
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/027ef998e78a434fbc3a3110b960ce0c~tplv-k3u1fbpfcp-watermark.image)

#### `NaN`

- `NaN` 是 `Number`，所以要判断是否是 `NaN`，可以使用内置的`isNaN` 方法，该方法返回 `true` / `false` 。

### 2. 实现 `instaceof`

- `instanceof` 用于判断一个变量是否某个对象的实例。
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1a7f02c529e49a19b6383172af526af~tplv-k3u1fbpfcp-watermark.image)

### 3. 实现 `new` 操作符

- `new` 做了什么：
  1. 创建了一个全新的对象；
  2. 会被执行 `[[Prototype]]`（也就是 `__proto__` ）链接；
  3. `this` 指向新创建的对象；
  4. 通过 `new` 创建的每个对象将最终被 `[[Prototype]]` 链接到这个函数的 prototype 对象上；
  5. 如果函数没有返回对象类型 `Object`(包含 `Functoin` , `Array` , `Date` , `RegExg`, `Error`)，那么 `new` 表达式中的函数调用将返回该对象引用。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26c8fd86016249ef85201c1dcbb97921~tplv-k3u1fbpfcp-watermark.image)

#### 3.1 普通写法

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b48bd6232b5541058b67b0806c870112~tplv-k3u1fbpfcp-watermark.image)

#### 3.2 箭头函数写法

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09ecd881f708447ab7babe40c13b4c33~tplv-k3u1fbpfcp-watermark.image)

#### 3.3 测试结果

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b66b3a4aeeec4a818fe6dac0738f1710~tplv-k3u1fbpfcp-watermark.image)

### 4. 类 `JAVA sleep` 函数

- `sleep` 函数可以让当前线程进行休眠指定时间。

#### 4.1 使用循环

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e145b689cc4d453aa550999abc50faa0~tplv-k3u1fbpfcp-watermark.image)

- 使用 `time` 打印执行时间会有一定误差。
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7c10c540f8e343a8be15f710063edc36~tplv-k3u1fbpfcp-watermark.image)

#### 4.2 `Promise`

- 使用 `Promise` 实现的，我更倾向理解为延迟，它不会中断当前执行代码，只是微任务，在延迟之后执行！

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/610c59c02a00419184bfdfc7d72169b6~tplv-k3u1fbpfcp-watermark.image)

- `then` 方法调用
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42d8ae06f2104dc7807c28a9566f9e13~tplv-k3u1fbpfcp-watermark.image) -` async/await` 方式

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b9a77147c1214adc980dda2b0aec87c8~tplv-k3u1fbpfcp-watermark.image)

#### 4.3 `Generator`

- 使用 `Generator` 实现的与 `Promise` 类似。
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b11d5d82ef494294bfc267fa2c52fd1e~tplv-k3u1fbpfcp-watermark.image)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05528ef5859245cb8bd2331614f62f56~tplv-k3u1fbpfcp-watermark.image)

### 5. `Promise`

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba330816aefe41d7b1d2818d6b3d6da5~tplv-k3u1fbpfcp-watermark.image)

- 请点击跳转链接 -> [ES6 Promise 最全手写实现](https://juejin.cn/post/6844904153651773448)

### 6. 绑定 `this`

- 相同点：
  - `call`、`bind`、 `apply` 都是用来改变 `this` 指向的。
  - `call`、`bind`、 `apply` 这三个函数的第一个参数都是 `this` 的指向对象。
- 不同点：
  - `call` 参数是直接放进去的，第二第三第 `n` 个参数全都用逗号分隔。
  - `apply` 的所有参数都必须放在一个数组里面。
  - `bind` 除了返回是函数以外，它的参数和 `call` 一样。

#### 6.1 `call`

- 不传入参数，默认指向为 `window`；
- 将函数设为对象的属性；
- 传入给定参数给执行函数并执行、删除这个函数。
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d9401b92dc94c75b1ea9725fc7e3a32~tplv-k3u1fbpfcp-watermark.image)

#### 6.2 `apply`

- 与 `call` 类似，第二参数为数组。
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df86d1626dde4294a7638fc98711bfd7~tplv-k3u1fbpfcp-watermark.image)

#### 6.3 `bind`

- 与 `call` 类似，返回的是一个函数。
  ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8275947367f8428cb068ab3048cfcec1~tplv-k3u1fbpfcp-watermark.image)

#### 6.4 测试结果

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2700aaea8744479c894e390ab09cabaf~tplv-k3u1fbpfcp-watermark.image)

### 7. 防抖

- 防抖：在限制的时间范围内连续触发相同事件，函数不会执行，直到间隔大于限制事件才执行。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/542231a4975b44d1989a156bf3b70045~tplv-k3u1fbpfcp-watermark.image)

### 8. 节流

- 节流：连续触发相同事件每隔指定时间调用一次。

#### 8.1 时间戳版节流

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff7d71f54f9c4a8ba90defc150c9a82b~tplv-k3u1fbpfcp-watermark.image)

#### 8.2 定时器版节流

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7355dd33817144bfa606c5a01678caf3~tplv-k3u1fbpfcp-watermark.image)

### 9. 柯里化

- 将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

#### 9.1 普通版

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41fea0d970af419fa28c74ae8c7cd160~tplv-k3u1fbpfcp-watermark.image)

#### 9.2 `ES6`版

- [参考地址](https://juejin.cn/post/6844903856489365518#heading-10)
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a8628e9b8984173af3f82489700b117~tplv-k3u1fbpfcp-watermark.image)

### 10. `Iterator`

- 作用：
  1. 为各种数据结构，提供一个统一的、简便的访问接口；
  2. 使得数据结构的成员能够按某种次序排列；
  3. `ES6` 创造了一种新的遍历命令 `for...of` 循环，`Iterator` 接口主要供`for...of` 消费。
- 遍历过程：
  1. 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
  2. 第一次调用指针对象的 `next` 方法，可以将指针指向数据结构的第一个成员。
  3. 第二次调用指针对象的 `next` 方法，指针就指向数据结构的第二个成员。
  4. 不断调用指针对象的 `next` 方法，直到它指向数据结构的结束位置。
- 原生具备 `Iterator` 接口的数据结构：`Array`、`Map`、`Set`、`String`、`TypedArray`、函数的 `arguments` 对象、`NodeList` 对象。

#### 10.1 判断是否有 `Iterator` 接口

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d02934c74e6f4b78823ad9a44d6a4cfd~tplv-k3u1fbpfcp-watermark.image)

#### 10.2 手动添加 `Iterator` 接口

- 例：对象
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f9296d66542b4de7b6aa946731788aa3~tplv-k3u1fbpfcp-watermark.image)
- 测试
  ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bed6eec8e4e84d9b9bffa3a58894cf9c~tplv-k3u1fbpfcp-watermark.image)

### 11. 封装浏览器本地存储 `localStorage`、`sessionStorage`

- 通过 `new` 操作符创建一个`localStorage / sessionStorage`的实例，在需要用的地方引入该实例，使用方法和之前类似，`setItem` 额外提供第三个参数设置过期时间。
- 额外提供两个方法 `getAll`（获取当前存储类型的所有存储内容的键值对象）、`forEach`（遍历所有存储内容，接收一个处理函数，函数接收两个参数：存储键名、对应的值）。
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5f85b0c74684678805da94563c2fde3~tplv-k3u1fbpfcp-watermark.image)

### 12. 数组 `flat`

- `flat` 方法是把多维数组进行指定维度的扁平化。
  - 不传参数，维度降一。
  - 传入 `Number`，大于最大维度，降为一维；小于 `1` 返回原始数组。
  - 传入 `Infinity` 降为一维;
  - 传入其他能转为 `Number`，转为 `Number` 再根据上面的规则判断，否则返回原始数组。

#### 12.1 任意维度降一维（数据类型不变）

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b5249b206a34bb997290e7baa5a2a9d~tplv-k3u1fbpfcp-watermark.image)

#### 12.2 任意维度降一维（数据类型变字符串）

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3cfc6ae266c04a6c8b3419c09c6b2a4d~tplv-k3u1fbpfcp-watermark.image)

#### 12.3 指定维度 - `ES6` 数组方法

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/def6efae24b34ef0a4a27a6f4333abe5~tplv-k3u1fbpfcp-watermark.image)

#### 12.4 指定维度 - `js` 递归

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b11b0b2c8e1e4c49af8c2efae718210d~tplv-k3u1fbpfcp-watermark.image)

### 13. 发布/订阅模式

- [JS 和多端应用通信](https://juejin.cn/post/6854573216107593742)
- 通过 `new` 操作符创建一个`EventEmitter`的实例，在需要用的地方引入该实例
  - `add`：注册事件；
  - `once`：注册只执行一次的事件，执行后销毁；
  - `remove`：移除事件支持全部移除、指定回调方法/下标（第几次绑定的事件）；
  - `removeByIndex`：支持全部移除/指定下标（第几次绑定的事件）；
  - `removeByCallback`：支持全部移除/指定回调方法；
  - `dispatch`：触发指定事件；
  - `clear`：清除全部注册事件；
  - `getAll`：获取全部注册事件；
  - `forEach`：遍历所有注册事件，并接受回调函数，回调函数接收两个参数：事件名称、事件注册的回调函数数组。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/522ce1e86cc540f8917b9af1295ff8f9~tplv-k3u1fbpfcp-watermark.image)

### 14. 对象数组过滤/去重

- 在开发中，我们拿到一个数组，数组的每个索引值是一个对象，由于对象可能存在很多的属性，我们需要只获取某个条件下对应对象指定的几个属性（过滤）；或存在我们只需要某个相同属性值**第一次出现**的对象（去重）。

#### 14.1 过滤

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c6829ca2ab3445c3baff723c0607c2a4~tplv-k3u1fbpfcp-watermark.image)

#### 14.2 去重

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68710d9871c74dd797fe477ad4431426~tplv-k3u1fbpfcp-watermark.image)

#### 14.3 测试

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ca3569a9f6f46faadc66b1ddc3013a7~tplv-k3u1fbpfcp-watermark.image)

### 15. 深拷贝

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf4d372ec9bf4adfaec7421dd5869136~tplv-k3u1fbpfcp-watermark.image)

### 16. 判断浏览器、浏览器内核、PC/Mobile、手机类型、操作系统

- 手机类型：`iPhone`, `Pixel`, `Moto`, `iPad`, `iPod`
- 浏览器类型：`Opera`, `Firefox`, `Chrome`, `Safari`,`WeChat`, `QQ`
- 内核类型：`Trident`, `Presto`, `WebKit`, `Gecko`
- 操作系统类型：`Mac`, `iOS`, `Android`, `Linux`, `Unix`, `Win`, `Win7`, `Win2000`, `Win2003`, `WinXP`, `WinVista`
- 电脑/手机：`PC`、`Mobile`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/164edd201b2943abb56dcf5dcf67dabf~tplv-k3u1fbpfcp-watermark.image)

### 17. 常用简短代码

#### 17.1 生成指定位数随机验证码

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7bc16d286ede4483a9bb6b4a49d2892b~tplv-k3u1fbpfcp-watermark.image)

#### 17.2 快速生成有规律自定义数组

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77e18541a7504666af04eeca60589e76~tplv-k3u1fbpfcp-watermark.image)

#### 17.3 数字千分位

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09b7f484ae474ef3ab8b78943a8e5244~tplv-k3u1fbpfcp-watermark.image)

#### 17.4 驼峰转指定符号格式字符串

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c04c45e35cc7421c8bfad0c8a9aef5ea~tplv-k3u1fbpfcp-watermark.image)

#### 17.5 密码组合正则至少包含 `2` 种

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a50ef5ce6a5947a5b94d152b80007d55~tplv-k3u1fbpfcp-watermark.image)

### 后言

- 之前写的 `Promise` 不满足 `PromiseA+` 的规范，后续会持续完善，并更新到 [GitHub 仓库](https://github.com/detanx/write-methods) 。

### 往期精彩

- [JavaScript 设计模式之行为型模式（下）](https://juejin.cn/post/6942280756353826823)
- [JavaScript 设计模式之行为型模式（上）](https://juejin.cn/post/6940910683571617805/)
- [JavaScript 设计模式之结构型模式](https://juejin.cn/post/6939851556019765262)
- [JavaScript 设计模式之简介及创建型模式](https://juejin.cn/post/6933874018755805197)
- [公众号打开小程序最佳解决方案（Vue）](https://juejin.cn/post/6925346648836112391)
- [Axios 你可能不知道使用方式](https://juejin.cn/post/6844904145082646542)

### 「点赞、收藏和评论」

❤️ 关注+点赞+收藏+评论+转发 ❤️，创作不易，鼓励笔者创作更好的文章，谢谢 🙏 大家。
