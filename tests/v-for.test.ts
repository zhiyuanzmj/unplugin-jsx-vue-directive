import { expect, test } from 'vitest'
import { MagicString, babelParse } from '@vue-macros/common'
import { vForTransform } from '../src/core/transform/v-for'

function getOptions(code: string, lang = 'vue') {
  return {
    parseResult: babelParse(code, lang === 'vue' ? 'js' : lang),
    s: new MagicString(code),
  }
}

test('v-for', () => {
  const result = vForTransform(
    getOptions(`
      const list = Array(4).fill('').map((_,index)=>index)
      export default ()=> <>
        <div v-for={i in list} key={i}>
          <div>{i}</div>
        </div>  
      </>
    `)
  )
  expect(result.toString()).toMatchInlineSnapshot(`
    "
          const list = Array(4).fill('').map((_,index)=>index)
          export default ()=> <>
             { list.map(i=><div  key={i}>
              <div>{i}</div>
            </div>) }  
          </>
        "
  `)
})
