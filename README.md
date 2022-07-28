# 欢迎来到国产良心 NFT 图片生成代码仓库

并非最佳实践，如果你有更好的建议或者代码优化，请提交 Issue 或者 PR。

公安提醒：本项目仅做学习和测试使用，请勿使用本项目做任何违法以及没良心的事情，天网恢恢疏而不漏！警察同志，这是开源项目，免费的不限制使用目的，使用者的一切行为均与开源者无关，谢谢。

Muxin 提醒：本项目可能还是需要你能看懂一点代码，对于脚本部分会需要你根据自己的项目具体情况进行修改，所以你也需要会写点代码。市面上应该有不需要写代码直接生成 NFT 图片的平台或工具，因为本人没有研究过，所以就不在这里分享了。

## 跑起来项目

```
git clone https://github.com/GuoChanLiangXin/gclx-art-engine.git
cd gclx-art-engine
npm install
```

## 技术

- 我们使用了 [HashLips](https://github.com/HashLips) 的 [hashlips_art_engine](https://github.com/HashLips/hashlips_art_engine) 进行 NFT 图片的生成，具体操作请认真阅读 HashLips 的官方 [Github README](https://github.com/HashLips/hashlips_art_engine)。如果有更好用的工具，请毫无保留的分享给大家吧！
- 此外本项目中还包含了部分脚本，方便进行筛图后的 metadata 更新、1/1 图片 metadata 的生成和图片序号打乱。

## 使用手册

除了 hashlips 的官方教程外，在此简单列一下操作步骤。
注意 📢：

- 请先认真阅读官方[文档](https://github.com/HashLips/hashlips_art_engine)/[教程](https://www.youtube.com/c/HashLipsNFT)。
- 请养成经常备份图片和 metadata 的好习惯，尤其是筛图的时候，别问我怎么知道的。
- 由于国产良心的筛选好的 selected 图片数量太大，就先不上传到 GitHub 了。

### 初始图片生成

- 首先你要从你的绘图工具中导出你需要的所有的 NFT 元素（眼睛、鼻子、嘴巴等等），它们应该是 png 格式，因为之后生成图片需要进行图层叠加，元素背景需要是透明的，特殊情况除外。
- 然后将这些元素在 layers 目录下按分类（或者叫做图层）建好目录。
- 每张图片要设置好它的稀有权重，这个是在文件名中体现的，文件命名规则见 HashLips 官方 [Github 文档](https://github.com/HashLips/hashlips_art_engine#usage-%E2%84%B9%EF%B8%8F)。
- 接下来要在 `src/config.js` 文件中配置好 `layerConfigurations`，我认为这应该算是图片生成中最重要的一个部分，你要设计好每个组合以及每个组合产生的图片数量。
- 运行命令 `npm run generate`，图片和 metadata 将会生成在 build 目录下，图片和 metadata 文件名字是按序号从 1 开始到你设置的数量。

### 筛图

- 如果你的 NFT 项目一共需要 1000 个 items， 那么一般情况下需要生成数量更多的图片，因为总会因为随机因素产生一些“残次品”，这个时候就需要加入高科技 - “人工智能”了！请邀请你信赖的朋友或工作量不大就直接交给艺术家本人吧，进行一次真正的人工智能筛选，智能在哪里呢？眼睛啊！请用你智能的眼睛将“残次品”们剔除掉，留下珍宝。对于国产良心来说，我们初始生成了 3000 张图片，经过层层筛选，选中了 990 张，再加上 10 张 1/1，一共 1000 张。

### 关于 metadata

（以下以国产良心 NFT 为例）
好的，此时你已经拥有了 1000 张 NFT 图片，里面包含了 990 张代码生成的图片和 10 张 1/1 图片，并且你还拥有 3000 个原始的 metadata JSON 文件，所以接下来要做几件事情：找出那 990 张图片对应的 metadata 文件，生成那 10 张 1/1 图片的 metadata 文件，最后将这 1000 张图片打乱顺序后生成从 0 到 999 的图片和对应的 metadata JSON 文件。

- 将筛选出来的 990 张图片放到 selected 目录下，把 10 张 1/1 图片放到 special 目录下。
- 在项目根目录下运行命令 `node readFilesName.js`，你将会得到一个你选好的图片（selected 目录下所有图片）的 id 数组。
- 将这组 id 复制到 `export.js` 文件中的 `selectedIds`里。
- 运行命令 `node export.js`，你将会在 export 目录下得到 1000 张已经打乱顺序的图片（序号重新排列）和 metadata，当然 `export.js` 脚本是需要你根据自己项目的具体情况进行修改的，脚本中已添加详细注释。

### 图片和 metadata 文件上传

- 接下来我们先要把生成好的图片上传到 ipfs，我们使用的是 [Pinata](https://app.pinata.cloud/)，先将整个图片目录上传上去，你会得到一个 `CID`，接下来需要把 metadata JSON 文件里的 image 路径替换掉，比如：`"image":"ipfs://CID"`。
- 如何进行批量替换呢？运行命令 `node generateMetadata.js`，注意替换你的 CID，并且最终生成的 metadata 不是 JSON 文件，将最终生成的 metadata 目录上传到 ipfs，你会得到一个最终的 metadata 的 baseURI（ipfs CID）。
- all done!

### TODO

我们之后会出一系列关于如何从头开始创建一个 NFT 项目的文章、教程，会有具体的流程和代码分析，想要第一时间知道，请关注官方推特：[@gclxnft](https://twitter.com/gclxnft)。

## What is LXDAO?

LXDAO is an R&D-focused DAO in Web3. Our mission is: To bring together buidlers to buidl and maintain valuable projects for Web3, in a sustainable manner.

<a target="_blank" href="https://lxdao.io/"><img alt="Buidl in LXDAO" src="buildinlxdao.png" width="180" /></a>
