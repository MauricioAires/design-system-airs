import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@airs-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
      defaultValue: 'md',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
