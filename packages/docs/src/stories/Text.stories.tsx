import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@airs-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
