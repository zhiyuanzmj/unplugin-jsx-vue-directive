import {
  type JSXAttribute,
  type JSXElement,
  type Node,
  type Program,
} from '@babel/types'
import { type MagicString, walkAST } from '@vue-macros/common'

export function vIfTransform(ast: Program, s: MagicString, offset = 0) {
  if (!s.slice(ast.start! + offset, ast.end! + offset).includes('v-if')) return

  const nodeMap = new Map<
    any,
    {
      node: JSXElement
      attribute: JSXAttribute
    }[]
  >()

  walkAST<Node>(ast, {
    enter(node, parent) {
      if (node.type !== 'JSXElement') return

      const attribute = node.openingElement.attributes.find(
        (i) =>
          i.type === 'JSXAttribute' &&
          ['v-if', 'v-else-if', 'v-else'].includes(`${i.name.name}`)
      ) as JSXAttribute
      if (attribute) {
        if (!nodeMap.has(parent)) nodeMap.set(parent, [])

        nodeMap.get(parent)?.push({
          node,
          attribute,
        })
      }
    },
  })

  const nodes = [...nodeMap.values()].flat()
  nodes.forEach(({ node, attribute }, index) => {
    if (['v-if', 'v-else-if'].includes(`${attribute.name.name}`)) {
      if (attribute.value)
        s.appendLeft(
          node.start! + offset,
          `${attribute.name.name === 'v-if' ? '{ ' : ''}${s.slice(
            attribute.value.start! + offset + 1,
            attribute.value.end! + offset - 1
          )} ? `
        )

      s.appendRight(
        node.end! + offset,
        `${nodes[index + 1]?.attribute.name.name}`.startsWith('v-else')
          ? ' :'
          : " : '' }"
      )
      s.remove(attribute.start! + offset - 1, attribute.end! + offset)
    } else {
      s.appendRight(node.end! + offset, ' }')
    }
  })

  return s
}
