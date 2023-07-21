import { expect, test } from 'vitest'
import { MagicString, babelParse } from '@vue-macros/common'
import { vIfTransform } from '../src/core/transform/v-if'

function getOptions(code: string, lang = 'vue') {
  return {
    parseResult: babelParse(code, lang === 'vue' ? 'js' : lang),
    s: new MagicString(code),
  }
}

test('v-if', () => {
  const result = vIfTransform(
    getOptions(`
      export default ()=> <>
        <div v-if={0}>0</div>  
        <div v-if={1}>1</div>  
      </>
    `)
  )
  expect(result.toString()).toMatchInlineSnapshot(`
    "
          export default ()=> <>
            { 0 ? <div>0</div> : ''}  
            { 1 ? <div>1</div> : ''}  
          </>
        "
  `)
})

test('v-else-if', () => {
  const result = vIfTransform(
    getOptions(`
      const foo = 0
      export default () => <>
        <div v-if={foo===0}>0</div>  
        <div v-else-if={foo===1}>1</div>  
      </>
    `)
  )
  expect(result.toString()).toMatchInlineSnapshot(`
    "
          const foo = 0
          export default () => <>
            { foo===0 ? <div>0</div> :  
            foo===1 ? <div>1</div> : ''}  
          </>
        "
  `)
})

test('v-else-if', () => {
  const result = vIfTransform(
    getOptions(`
      const foo = 2
      export default () => <>
        <div v-if={foo===0}>0</div>  
        <div v-else-if={foo===1}>1</div>
        <div v-else-if={foo===2}>2</div>  
      </>
    `)
  )
  expect(result.toString()).toMatchInlineSnapshot(`
    "
          const foo = 2
          export default () => <>
            { foo===0 ? <div>0</div> :  
            foo===1 ? <div>1</div> :
            foo===2 ? <div>2</div> : ''}  
          </>
        "
  `)
})

test('v-else', () => {
  const result = vIfTransform(
    getOptions(`
      const foo = 2
      export default () => <>
        <div v-if={foo===0}>0</div>  
        <div v-else-if={foo===1}>1</div>
        <div v-else={foo===2}>2</div>   
      </>
    `)
  )
  expect(result.toString()).toMatchInlineSnapshot(`
    "
          const foo = 2
          export default () => <>
            { foo===0 ? <div>0</div> :  
            foo===1 ? <div>1</div> :
            <div v-else={foo===2}>2</div> }   
          </>
        "
  `)
})

test('nested v-if', () => {
  const result = vIfTransform(
    getOptions(`
      const foo = 2
      export default () => <>
        <div v-if={foo===0}>
          <div v-if={foo==0}>0-0</div>
          <div v-else-if={foo==1}>0-1</div>
          <div v-else>0-2</div>
        </div>  
        <div v-else-if={foo===1}>1</div>
        <div v-else={foo===2}>2</div>   
      </>
    `)
  )
  expect(result.toString()).toMatchInlineSnapshot(`
    "
          const foo = 2
          export default () => <>
            { foo===0 ? <div>
              { foo==0 ? <div>0-0</div> :
              foo==1 ? <div>0-1</div> :
              <div v-else>0-2</div> }
            </div> :  
            foo===1 ? <div>1</div> :
            <div v-else={foo===2}>2</div> }   
          </>
        "
  `)
})
