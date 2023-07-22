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
  let asts = [babelParse(code, lang === 'vue' ? 'js' : lang)]
  let offset = 0
  if (lang === 'vue') {
    const { scriptSetup, getSetupAst, script, getScriptAst } = parseSFC(
      code,
      id
    )
    content = `${scriptSetup?.content}${script?.content}`
    offset = scriptSetup?.loc.start.offset || 0
    asts = [getSetupAst(), getScriptAst()].filter(Boolean)! as any
  }
  if (!/v-for|v-if/.test(content)) return null

  const s = new MagicString(code)
  for (const ast of asts) {
    vIfTransform(ast, s, offset)
    vForTransform(ast, s, offset)
  }

  return getTransformResult(s, id)
}
