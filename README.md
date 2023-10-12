# react 路由权限

## 创建项目

```bash
pnpm create vite@latest
```

## 代码规范配置

#### 首先先安装下vscode插件：

- ESLint
- Prettier - Code formatter

#### 新版`vite`创建项目时已安装好 `eslint`，不需要再单独安装

#### 安装[prettier](https://www.prettier.cn/)：代码格式美化

```bash
pnpm add --save-dev --save-exact prettier
```

#### 安装[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)和[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

```bash
pnpm add eslint-config-prettier eslint-plugin-prettier --save-dev
```

- `eslint-config-prettier`：解决`eslint`和`prettier`冲突
- `eslint-plugin-prettier`：将`prettier`作为`eslint`规则运行，并将差异作为ESLint问题报告。
> `eslint-plugin-prettier`这个插件附带一个`plugin:prettier/recommended`配置，可以一次性设置插件和`eslint-config-prettier`。你需要添加`plugin:prettier/recommended`作为你的`.eslintrc.json`中的最后一个扩展名

```js
{
  "extends": ["plugin:prettier/recommended"]
}
```

`plugin:prettier/recommended` 到底在做什么

```json
{
  "extends": ["prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

#### 添加 husky + lint-staged

```bash
pnpx mrm@2 lint-staged
```
> 执行此命令前需要你的项目是一个git项目，因为husky是管理git钩子的，如果不是git项目，执行`git init`初始化git仓库

此命令会安装`husky`和`lint-staged`，然后向项目的`package.json`添加一个配置，和一个`.husky/pre-commit`文件。

```json
{
  "lint-staged": {
    "*.{ts,tsx}": "eslint --cache --fix"
  }
}
```
.husky/pre-commit
```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```
