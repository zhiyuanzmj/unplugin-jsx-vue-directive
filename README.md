# unplugin-vue-jsx-directive [![npm](https://img.shields.io/npm/v/unplugin-vue-jsx-directive.svg)](https://npmjs.com/package/unplugin-vue-jsx-directive)

[![Unit Test](https://github.com/zhiyuanzmj/unplugin-vue-jsx-directive/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhiyuanzmj/unplugin-vue-jsx-directive/actions/workflows/unit-test.yml)

Starter template for [unplugin](https://github.com/unjs/unplugin).

## Installation

```bash
npm i -D unplugin-vue-jsx-directive
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginStarter from 'unplugin-vue-jsx-directive/vite'

export default defineConfig({
  plugins: [UnpluginStarter()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginStarter from 'unplugin-vue-jsx-directive/rollup'

export default {
  plugins: [UnpluginStarter()],
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'

build({
  plugins: [require('unplugin-vue-jsx-directive/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-vue-jsx-directive/webpack')()],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-vue-jsx-directive/webpack')()],
  },
}
```

<br></details>

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/zhiyuanzmj/sponsors/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/zhiyuanzmj/sponsors/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [zhiyuanzmj](https://github.com/zhiyuanzmj)
