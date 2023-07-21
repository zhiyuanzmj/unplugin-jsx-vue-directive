import {
  MagicString,
  babelParse,
  getLang,
  getTransformResult,
  parseSFC,
} from '@vue-macros/common'
import { vIfTransform } from './v-if'
import { vForTransform } from './v-for'

export function transform(code: string, id: string) {
  const lang = getLang(id)

  let content = code
  if (lang === 'vue') {
    const { scriptSetup, script } = parseSFC(code, id)
    content = `${scriptSetup?.content}${script?.content}`
  }
  if (!/v-for|v-if/.test(content)) return null

  const parseResult = babelParse(code, lang === 'vue' ? 'js' : lang)
  const s = new MagicString(code)
  if (content.includes('v-if')) vIfTransform({ s, parseResult })
  if (content.includes('v-for')) vForTransform({ s, parseResult })

  return getTransformResult(s, id)
}
