const path = require("path");
const themeConfig = require("./config/theme/");

module.exports = {
  dest: "public",
  // base: '/vuepress-theme-reco-doc/',
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    ["meta", { name: "author", content: "reco_luan" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "vuepress,reco,reco_luan,vuepress-reco,vuepress-theme-reco,theme,blog,主题",
      },
    ],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#42b983" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/icon_vuepress_reco.png" }],
    [
      "link",
      { rel: "mask-icon", href: "/icon_vuepress_reco.svg", color: "#42b983" },
    ],
    [
      "meta",
      { name: "msapplication-TileImage", content: "/icon_vuepress_reco.png" },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  theme: "reco",
  themeConfig,
  locales: {
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "vuepress-theme-reco",
      description: "一款简洁而优雅的 vuepress 博客 & 文档 主题。",
    },
    "/en/": {
      lang: "en-US",
      title: "vuepress-theme-reco",
      description: "A simple and beautiful vuepress Blog & Doc theme.",
    },
  },
  markdown: {
    // lineNumbers: true
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-149716079-2",
      },
    ],
    [
      "@vuepress/plugin-register-components",
      {
        components: [
          {
            name: "reco-home-page-one",
            path: path.resolve(__dirname, "./components/HomePageOne.vue"),
          },
        ],
        componentsDir: path.resolve(__dirname, "./demo"),
      },
    ],
    "@vuepress-reco/extract-code",
    "flowchart",
    [
      "@vuepress-reco/rss",
      {
        site_url: "https://vuepress-theme-reco.recoluan.com",
        copyright: "",
      },
    ],
    [
      "@vuepress-reco/bulletin-popover",
      {
        body: [
          {
            type: "title",
            content: "欢迎加入QQ交流群 🎉🎉🎉",
          },
          {
            type: "text",
            content: "QQ群1：1037296104",
            style: "text-align: center;",
          },
          {
            type: "text",
            content: "QQ群2：1061561395",
            style: "text-align: center;",
          },
          {
            type: "text",
            content: "QQ群3：962687802",
            style: "text-align: center;",
          },
          {
            type: "text",
            content: `🎉🎉🎉 reco 主题 2.x 已经发布 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。。
          <ul>
            <li><a href="/views/2.x/">Usage<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco/issues">Issues<a/></li>
            <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco/discussions/1">Discussions<a/></li>
          </ul>`,
            style: "font-size: 12px;",
          },
          // {
          //   type: 'image',
          //   src: '/rvcode_qq.png'
          // }
        ],
        footer: [
          {
            type: "button",
            text: "打赏",
            link: "/views/other/donate.html",
          },
        ],
      },
    ],
    "@vuepress-reco/extract-code",
  ],
};
