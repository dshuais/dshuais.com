# dshuais

The home page of my site. A clean and concise page based on Nuxt + TypeScript.

> 网站地址：[https://www.dshuais.com/](https://www.dshuais.com/)

### 预览
![image](https://github.com/dshuais/dshuais.com/assets/88620329/2b64282b-d4ce-4c38-9701-26096d18179a)

### 主要功能
- [x] 载入动画
- [x] 开屏动画
- [x] 个性化标题(hover)
- [x] 社交链接
- [x] 站点数据
- [x] 每日一言
- [x] 日期时间
- [x] 个人网站列表
- [x] 适配移动端

### 自动部署
> 国内用户建议使用[Netlify](https://app.netlify.com/)部署。这里我假设您了解基础的开发与部署流程

**1、fork此仓库**
![image](https://github.com/dshuais/dshuais.com/assets/88620329/e1f7d5a3-05a1-4278-9384-40fea3e67df5)

**2、Netlify直接部署**

(1) 通过github登录
![image](https://github.com/dshuais/dshuais.com/assets/88620329/f2d1e9a4-7e7b-4a90-be8d-5b24e107e2ad)


(2) 部署（Add new site）
![image](https://github.com/dshuais/dshuais.com/assets/88620329/8bde1a8d-dfce-4717-8dee-1d7c68ac33a1)

Deploy with GitHub，选择您fork到的仓库地址。<br />
Netlify 会自动检测当前为 Nuxt 项目部署，或手动更改打包部署命令

![image](https://github.com/dshuais/dshuais.com/assets/88620329/7e0dc384-ebbd-42b0-8eb7-c6ac6643ba76)

最后 Deploy xxx 您的site，如果不需要解析到自己域名的，到这里就完成了

(3) 指向到自己的域名
![image](https://github.com/dshuais/dshuais.com/assets/88620329/ca5bcba3-998d-43e5-8cb0-becd29c54f2f)

Add domain alias 输入您自己的域名地址即可

> 注：解析到自己的域名，需要在您的域名购置处将要指向的域名添加解析，解析地址就是您部署到 Netlify 后，Netlify 指向您site的二级域名

**完结散花！**

### 技术栈

本站主要采用Nuxt+Typescript+tsx+Pinia+Tailwindcss等技术栈构建。

* [Nuxt](https://nuxt.com/)
* [Vue](https://cn.vuejs.org/)
* [Vite](https://vitejs.cn/vite3-cn/)
* [Pinia](https://pinia.vuejs.org/zh/)
* [Tailwindcss](https://www.tailwindcss.cn/)
* [Icones](https://icones.js.org/)

### 常见问题

(1) 载入动画过久，进入首页较慢。<br />
    从载入动画到进入页面阶段会对当前壁纸进行预加载，单张壁纸资源平均在2m左右，但也有6-10m的壁纸，如网络环境或部署地址不是很理想，就会出现载入动画过久问题。<br />
    为何采用了 Nuxt 还要对图片进行预加载，是因为页面展现后做了开屏动画，如壁纸未加载完成还是会出现无开屏动画或图片白屏出现的不好的视觉体验。<br />
    可通过改善网络环境或开启CDN的方式提升网络性能和加载速度。<br />

> 更多问题欢迎提交 issue 一起讨论优化。

如果该库正好帮助到了你，欢迎 star，你的 star 是我改 BUG 的动力 ヾ(ゝω・)ノ

### 灵感来源

主要灵感和思路借鉴于 imsyy 大佬的 [home](https://github.com/imsyy/home) 库，并采用 Nuxt + TypeScript 优化构建。

