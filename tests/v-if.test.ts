import { expect, test } from 'vitest'
import { transform } from '../src/core/transform'

test('v-if for vue', () => {
  const result = transform(
    `
    <script setup lang="tsx">
      defineRender(()=> 
        <>
          <div v-if={0}>0</div>  
          <div v-if={1}>1</div>  
        </>
      )
    </script>
    `,
    'test.vue'
  )
  expect(result?.code).toMatchInlineSnapshot(`
    "
        <script setup lang=\\"tsx\\">
          defineRender(()=> 
            <>
              { 0 ? <div>0</div> : ''}  
              { 1 ? <div>1</div> : ''}  
            </>
          )
        </script>
        "
  `)
})

test('v-else-if for vue', () => {
  const result = transform(
    `
    <script setup lang="tsx">
      const foo = 0
      defineRender(() => <>
        <div v-if={foo===0}>0</div>  
        <div v-else-if={foo===1}>1</div>  
      </>)
    </script>
    `,
    'test.vue'
  )
  expect(result?.code).toMatchInlineSnapshot(`
    "
        <script setup lang=\\"tsx\\">
          const foo = 0
          defineRender(() => <>
            { foo===0 ? <div>0</div> :  
            foo===1 ? <div>1</div> : ''}  
          </>)
        </script>
        "
  `)
})

test('v-else-if for tsx', () => {
  const result = transform(
    `
    const foo = 2
    export default () => <>
      <div v-if={foo===0}>0</div>  
      <div v-else-if={foo===1}>1</div>
      <div v-else-if={foo===2}>2</div>  
    </>
    `,
    'test.tsx'
  )
  expect(result?.code).toMatchInlineSnapshot(`
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

test('v-else for jsx', () => {
  const result = transform(
    `
      const foo = 2
      export default () => <>
        <div v-if={foo===0}>0</div>  
        <div v-else-if={foo===1}>1</div>
        <div v-else={foo===2}>2</div>   
      </>
    `,
    'test.jsx'
  )
  expect(result?.code).toMatchInlineSnapshot(`
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

test('nested v-if for vue', () => {
  const result = transform(
    `
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
    `,
    'test.tsx'
  )
  expect(result?.code).toMatchInlineSnapshot(`
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
