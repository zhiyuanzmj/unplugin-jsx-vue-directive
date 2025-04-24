# unplugin-jsx-vue-directive [![npm](https://img.shields.io/npm/v/unplugin-jsx-vue-directive.svg)](https://npmjs.com/package/unplugin-jsx-vue-directive)

## This repository is no longer maintained. Please migrate to [@vue-macors/jsx-directive](https://github.com/vue-macros/vue-macros/tree/main/packages/jsx-directive)

[![Unit Test](https://github.com/zhiyuanzmj/unplugin-jsx-vue-directive/actions/workflows/unit-test.yml/badge.svg)](https://github.com/zhiyuanzmj/unplugin-jsx-vue-directive/actions/workflows/unit-test.yml)

> This project has been transferred to [@vue-macros/jsx-directive](https://github.com/vue-macros/vue-macros/tree/main/packages/jsx-directive) 🎉

`v-if` & `v-for` directive for jsx.

Thanks [@sxzz](https://github.com/sxzz) for the [@vue-macros/common](https://github.com/vue-macros/vue-macros/tree/main/packages/common)

<img width="1032" alt="image" src="https://github.com/zhiyuanzmj/unplugin-jsx-vue-directive/assets/32807958/83be0c3c-baff-4706-a0ed-344ed8315658">
 
## Installation

```bash
npm i -D unplugin-jsx-vue-directive
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import JsxVueDirective from 'unplugin-jsx-vue-directive/vite'

export default defineConfig({
  plugins: [JsxVueDirective()],
})
```

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import JsxVueDirective from 'unplugin-jsx-vue-directive/rollup'

export default {
  plugins: [JsxVueDirective()],
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


## License

[MIT](./LICENSE) License © 2023-PRESENT [zhiyuanzmj](https://github.com/zhiyuanzmj)
