import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import { type Options, resolveOption } from './core/options'
import { transform } from './core/transform'

export default createUnplugin<Options | undefined, false>((rawOptions = {}) => {
  const options = resolveOption(rawOptions)
  const filter = createFilter(options.include, options.exclude)

  const name = 'unplugin-jsx-vue-directive'
  return {
    name,
    enforce: options.enforce,

    transformInclude(id) {
      return filter(id)
    },

    transform,
  }
})
