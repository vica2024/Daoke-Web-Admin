中文 | [English](./README-en.md)

# 稻客民宿系统
<p align="center">
    <img src="https://s1.imagehub.cc/images/2024/04/29/9e531fec82c60fefbaceaafc8fbf7229.png" width="150" />
</p>
<p align="center">
    <a href="" target="_blank">主页</a> |
    <a href="" target="_blank">文档</a> | 
    <a href="" target="_blank">演示</a> 
</p>
稻客民宿是一款多端（租客，房东，管家，总后台，门店）功能全面强大房屋管理系统，适用于物业托管，民宿长租，短租，钟点房时等文旅产业的企业。当前代码仓库是后台管理的前端项目，目前代码还在陆续更新中，喜欢的麻油可以给个小✨鼓励一下子。

## 项目结构

```bash
  ├── README.md
  ├── package.json
  ├── index.html
  ├── src
  │   ├── api  # 请求接口
  │   ├── assets  # 静态资源
  │          └── style 全局样式
  │   ├── components  # 通用业务组件
  │   ├── config  # 全局配置(包含echarts主题)
  │          └── settings.json  # 配置文件
  │   ├── directives # 指令集（如需，可自行补充）
  │   ├── filters # 过滤器（如需，可自行补充）
  │   ├── hooks # 全局hooks
  │   ├── layout  # 布局
  │   ├── locale  # 国际化语言包
  │   ├── mock  # 模拟数据
  │   ├── views  # 页面模板
            └── dashboard  # 运营数据
            └── exception  # 框架演示页面
            └── from  # 框架演示页面
            └── home  # 主页
            └── house  # 房屋
            └── list  # 框架演示页面
            └── login  # 登陆页面
            └── not-found  # 403错误页面
            └── order  # 订单页面
            └── redirct  # 跳转页面
            └── result  # 框架演示结果页面
            └── user  # 用户

  │   ├── router # 路由配置
  │   ├── store  # 状态管理中心
  │   ├── types  # Typescript 类型
  │   └── utils  # 工具库
  │   └── App.vue  # 视图入口
  │   └── main.ts  # 入口文件
  └── tsconfig.json
  └── vite.config.ts

```

## 安装使用

- 获取代码
```
git clone https://github.com/vica2024/DaokeHomestay-vue.git
```
- 安装依赖
```
cd DaokeHomestay && yarn install 
```
或者
```
cd DaokeHomestay && npm install
```
- 运行项目
```
yarn dev
```
或者
```
nup run dev
```
- 打包发布
```
yarn build
```

## 技术支持

![输入图片说明](https://i.postimg.cc/T2j9PvyH/rrrrimage.png)

## 软件截图
![输入图片说明](https://i.postimg.cc/s29Fc066/2024-07-03-17-46-50.png)
![输入图片说明](https://i.postimg.cc/3xGQywgH/2024-07-03-17-46-58.png)
![输入图片说明](https://i.postimg.cc/j5spkQBs/2024-07-03-17-46-27.png)
![输入图片说明](https://i.postimg.cc/N0wqRw42/2024-07-03-17-46-17.png)
![输入图片说明](https://i.postimg.cc/tT2K0nHF/2024-07-03-17-46-04.png)





