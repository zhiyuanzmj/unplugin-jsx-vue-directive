import { type JSXAttribute, type JSXElement, type Node } from '@babel/types'
import { type MagicString, walkAST } from '@vue-macros/common'

export function vForTransform({
  s,
  parseResult,
}: {
  s: MagicString
  parseResult: any
}) {
  const nodes: {
    node: JSXElement
    attribute: JSXAttribute
  }[] = []

  walkAST<Node>(parseResult, {
    enter(node) {
      if (node.type !== 'JSXElement') return

      const attribute = node.openingElement.attributes.find(
        (i) => i.type === 'JSXAttribute' && ['v-for'].includes(`${i.name.name}`)
      ) as JSXAttribute
      if (attribute) {
        nodes.push({
          node,
          attribute,
        })
      }
    },
  })

  nodes.forEach(({ node, attribute }) => {
    if (`${attribute.name.name}` === 'v-for') {
      if (!attribute.value) return
      const [i, , list] = s
        .slice(attribute.value.start! + 1, attribute.value.end! - 1)
        .split(/\s/)

      s.appendLeft(node.start!, ` { ${list}.map(${i}=>`)

      s.appendRight(node.end!, ') }')
      s.removeNode(attribute)
    }
  })

  return s
}
