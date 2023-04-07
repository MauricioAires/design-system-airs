import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@airs-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTage: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão, o componente `Heading` sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
