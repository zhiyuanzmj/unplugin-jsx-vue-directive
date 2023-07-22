import { expect, test } from 'vitest'
import { transform } from '../src/core/transform'

test('v-for for vue', () => {
  const result = transform(
    `
    <script setup lang="tsx">
      const list = Array(4).fill('').map((_,index)=>index)
      defineRender(()=> <>
        <div v-for={i in list} key={i}>
          <div>{i}</div>
        </div>  
      </>)
    </script>
    `,
    'test.vue'
  )
  expect(result?.code).toMatchInlineSnapshot(`
    "
        <script setup lang=\\"tsx\\">
          const list = Array(4).fill('').map((_,index)=>index)
          defineRender(()=> <>
             { list.map(i=><div key={i}>
              <div>{i}</div>
            </div>) }  
          </>)
        </script>
        "
  `)
})
