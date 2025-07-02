# 远程物料组件库

这是一个使用Vercel托管的远程物料组件库，提供各种React组件供低代码平台使用。

## 物料目录

1. **主按钮** (button-primary)
   - 类型：button
   - 分类：UI组件

2. **信息卡片** (card-info)
   - 类型：card
   - 分类：UI组件

3. **柱状图** (chart-bar)
   - 类型：chart
   - 分类：图表

## 使用方法

物料索引文件：`/index.json`
组件文件：`/components/{id}.js`
缩略图：`/thumbnails/{thumbnailPath}`

## 部署

此项目使用Vercel部署：

```bash
npm install -g vercel
vercel login
vercel
```

## CORS配置

已配置允许跨域访问，可在vercel.json中修改。 