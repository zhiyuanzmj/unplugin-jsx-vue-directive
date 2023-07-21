# unplugin-jsx-vue-directive [![npm](https://img.shields.io/npm/v/unplugin-jsx-vue-directive.svg)](https://npmjs.com/package/unplugin-jsx-vue-directive)

[![Unit Test](https://github.com/zhiyuanzmj/unplugin-jsx-vue-directive/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhiyuanzmj/unplugin-jsx-vue-directive/actions/workflows/unit-test.yml)

`v-if` & `v-for` directive for jsx.
Thank for [@sxzz](https://github.com/sxzz).

<img width="1032" alt="image" src="https://github.com/zhiyuanzmj/unplugin-jsx-vue-directive/assets/32807958/83be0c3c-baff-4706-a0ed-344ed8315658">

## Installation

```bash
npm i -D unplugin-jsx-vue-directive
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginStarter from 'unplugin-jsx-vue-directive/vite'

export default defineConfig({
  plugins: [UnpluginStarter()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginStarter from 'unplugin-jsx-vue-directive/rollup'

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
  plugins: [require('unplugin-jsx-vue-directive/esbuild')()],
})
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [require('unplugin-jsx-vue-directive/webpack')()],
}
```

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [require('unplugin-jsx-vue-directive/webpack')()],
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
