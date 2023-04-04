import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@airs-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta

export const Primary: StoryObj = {}
export const Big: StoryObj = {
  args: {
    size: 'big',
  },
}
